#!/usr/bin/env python3
"""Clona vertigo.com.br (WordPress + Elementor) para Markdown + imagens locais.

Saída (relativa à raiz do projeto):
  src/content/{pages,blog,cases}/*.md   conteúdo em Markdown com frontmatter
  public/wp-content/uploads/...         imagens/arquivos espelhados
  raw-html/                             snapshot HTML completo de cada URL
  data/                                 taxonomias, url-map, manifest de imagens
"""
import json
import re
import sys
import time
from pathlib import Path
from urllib.parse import urljoin, urlparse, unquote

import requests
from bs4 import BeautifulSoup, Comment
from markdownify import MarkdownConverter

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://vertigo.com.br"
API = f"{BASE}/wp-json/wp/v2"
HOST_RE = re.compile(r"^https?://(www\.)?vertigo\.com\.br", re.I)

S = requests.Session()
S.headers["User-Agent"] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128 Safari/537.36"

OUT_CONTENT = ROOT / "src" / "content"
OUT_PUBLIC = ROOT / "public"
OUT_RAW = ROOT / "raw-html"
OUT_DATA = ROOT / "data"

image_manifest: dict[str, str] = {}  # url remota -> caminho local (/wp-content/...)
failed_assets: list[str] = []


def get(url, **kw):
    for attempt in range(5):
        try:
            r = S.get(url, timeout=60, **kw)
            if r.status_code in (429, 500, 502, 503, 504):
                time.sleep(2 * (attempt + 1))
                continue
            time.sleep(0.2)
            return r
        except requests.RequestException:
            time.sleep(2 * (attempt + 1))
    return None


def fetch_all(endpoint, params=""):
    items, page = [], 1
    while True:
        r = get(f"{API}/{endpoint}?per_page=100&page={page}{params}")
        if r is None or r.status_code != 200:
            break
        items += r.json()
        if page >= int(r.headers.get("X-WP-TotalPages", 1)):
            break
        page += 1
    return items


# ---------------------------------------------------------------- assets

def is_upload(url):
    return bool(url) and "/wp-content/" in url and HOST_RE.match(url or "")


def local_path_for(url):
    p = unquote(urlparse(url).path)
    return p  # espelha /wp-content/uploads/...


def download_asset(url):
    """Baixa asset e retorna caminho local público (/wp-content/...)."""
    url = url.split("#")[0].split("?")[0]
    if url.startswith("//"):
        url = "https:" + url
    if url.startswith("/"):
        url = BASE + url
    if not is_upload(url):
        return None
    if url in image_manifest:
        return image_manifest[url]
    local = local_path_for(url)
    dest = OUT_PUBLIC / local.lstrip("/")
    if not dest.exists():
        r = get(url)
        if r is None or r.status_code != 200:
            failed_assets.append(url)
            image_manifest[url] = local
            return local
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(r.content)
    image_manifest[url] = local
    return local


SIZE_RE = re.compile(r"-\d+x\d+(?=\.\w+$)")


def best_src(img):
    """Pega a maior variante disponível da imagem (srcset/lazy)."""
    cands = []
    for attr in ("srcset", "data-srcset", "data-lazy-srcset"):
        if img.get(attr):
            for part in img[attr].split(","):
                bits = part.strip().split()
                if bits:
                    w = int(re.sub(r"\D", "", bits[1]) or 0) if len(bits) > 1 else 0
                    cands.append((w, bits[0]))
    src = img.get("data-lazy-src") or img.get("data-src") or img.get("src")
    if src and not src.startswith("data:"):
        cands.append((int(img.get("width") or 0) if str(img.get("width", "")).isdigit() else 0, src))
    if not cands:
        return None
    cands.sort(key=lambda c: c[0], reverse=True)
    return cands[0][1]


def original_of(url):
    return SIZE_RE.sub("", url)


def rewrite_url(href):
    if not href:
        return href
    if href.startswith("//"):
        href = "https:" + href
    if HOST_RE.match(href):
        if "/wp-content/" in href:
            return download_asset(href) or href
        path = HOST_RE.sub("", href) or "/"
        return path
    return href


# ---------------------------------------------------------------- markdown

class MD(MarkdownConverter):
    def convert_iframe(self, el, text, *a, **kw):
        return "\n\n" + str(el) + "\n\n"

    def convert_video(self, el, text, *a, **kw):
        return "\n\n" + str(el) + "\n\n"


def to_md(html):
    md = MD(heading_style="ATX", bullets="-", strip=["span"]).convert(html)
    md = re.sub(r"[ \t]+\n", "\n", md)
    md = re.sub(r"\n{3,}", "\n\n", md)
    return md.strip() + "\n"


def clean_fragment(soup_el):
    """Normaliza imagens/links e remove lixo antes de converter."""
    for c in soup_el.find_all(string=lambda t: isinstance(t, Comment)):
        c.extract()
    for t in soup_el.select("script, style, noscript, svg, form, .elementor-hidden-desktop, .screen-reader-text"):
        # forms são registrados separadamente
        t.decompose()
    for n in soup_el.select(".elementor-counter-number[data-to-value]"):
        n.string = n["data-to-value"]
    for img in soup_el.find_all("img"):
        src = best_src(img)
        if not src:
            img.decompose()
            continue
        if src.startswith("//"):
            src = "https:" + src
        if is_upload(src):
            orig = original_of(src)
            if orig != src:
                download_asset(src)  # garante fallback
                local_orig = download_asset(orig)
                if orig not in failed_assets:
                    src = orig
            local = download_asset(src)
            img["src"] = local
        for a in list(img.attrs):
            if a not in ("src", "alt", "title"):
                del img[a]
    for a in soup_el.find_all("a"):
        if a.get("href"):
            a["href"] = rewrite_url(a["href"])
    for f in soup_el.find_all("iframe"):
        for a in list(f.attrs):
            if a not in ("src", "width", "height", "title", "allow", "allowfullscreen", "frameborder"):
                del f[a]
    return soup_el


def css_backgrounds(html):
    urls = set(re.findall(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)", html))
    return [u for u in urls if "/wp-content/uploads/" in u]


def frontmatter(d):
    return "---\n" + json_yaml(d) + "---\n\n"


def json_yaml(d):
    # YAML válido usando strings JSON (evita problemas com ':' e aspas)
    lines = []
    for k, v in d.items():
        if v is None or v == [] or v == "":
            continue
        if isinstance(v, dict):
            lines.append(f"{k}:")
            for k2, v2 in v.items():
                if v2 not in (None, "", []):
                    lines.append(f"  {k2}: {json.dumps(v2, ensure_ascii=False)}")
        else:
            lines.append(f"{k}: {json.dumps(v, ensure_ascii=False)}")
    return "\n".join(lines) + "\n"


def text(html):
    return BeautifulSoup(html or "", "lxml").get_text(" ", strip=True)


def seo_of(item):
    y = item.get("yoast_head_json") or {}
    og = (y.get("og_image") or [{}])[0].get("url")
    return {
        "title": y.get("title"),
        "description": y.get("description") or y.get("og_description"),
        "canonical": y.get("canonical"),
        "ogImage": download_asset(og) if og else None,
        "robots": ", ".join(f"{k}" for k, v in (y.get("robots") or {}).items() if v in ("index", "follow", "noindex", "nofollow")) or None,
    }


def save_raw(url, html):
    path = urlparse(url).path.strip("/") or "index"
    dest = OUT_RAW / f"{path}.html"
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(html, encoding="utf-8")
    return dest


def fetch_live(url):
    r = get(url)
    if r is None or r.status_code != 200:
        return None
    r.encoding = "utf-8"
    save_raw(url, r.text)
    for u in css_backgrounds(r.text):
        download_asset(urljoin(url, u))
    return r.text


def main_content(live_html):
    s = BeautifulSoup(live_html, "lxml")
    main = s.select_one('[data-elementor-type="wp-page"], [data-elementor-type="wp-post"], [data-elementor-type="single-post"], [data-elementor-type="single"]')
    if main is None:
        main = s.select_one("main, article, #content")
    forms = []
    if main is not None:
        for f in main.select("form"):
            forms.append({"id": f.get("id"), "name": f.get("name") or f.get("aria-label"),
                          "fields": [i.get("name") for i in f.select("input,select,textarea") if i.get("name")]})
    return main, forms


# ---------------------------------------------------------------- terms

def build_terms():
    cats = fetch_all("categories")
    tags = fetch_all("tags")
    categorias = fetch_all("categorias")
    OUT_DATA.mkdir(parents=True, exist_ok=True)
    slim = lambda xs: [{k: x.get(k) for k in ("id", "name", "slug", "description", "count", "parent", "link")} for x in xs]
    for name, xs in (("categories", cats), ("tags", tags), ("case-categorias", categorias)):
        (OUT_DATA / f"{name}.json").write_text(json.dumps(slim(xs), ensure_ascii=False, indent=2), encoding="utf-8")
    return ({c["id"]: c for c in cats}, {t["id"]: t for t in tags}, {c["id"]: c for c in categorias})


# ---------------------------------------------------------------- export

def export_item(item, kind, terms, url_map):
    cats, tags, categorias = terms
    link = item["link"]
    slug = unquote(item["slug"])
    rest_html = (item.get("content") or {}).get("rendered", "")
    live = fetch_live(link)
    forms = []
    source = "rest"
    if kind == "pages" or "elementor" in rest_html or len(text(rest_html)) < 50:
        main, forms = main_content(live or "")
        if main is not None:
            frag = main
            source = "live-html"
        else:
            frag = BeautifulSoup(rest_html, "lxml").body or BeautifulSoup("", "lxml")
    else:
        frag = BeautifulSoup(rest_html, "lxml").body

    frag = clean_fragment(frag)
    body = to_md(frag.decode_contents() if frag else "")
    body = dedupe_lines(body) if source == "live-html" else body

    emb = item.get("_embedded") or {}
    featured = None
    fm = (emb.get("wp:featuredmedia") or [None])[0]
    if fm and fm.get("source_url"):
        featured = {"src": download_asset(fm["source_url"]), "alt": fm.get("alt_text") or ""}
    author = ((emb.get("author") or [{}])[0] or {}).get("name")

    data = {
        "title": text(item["title"]["rendered"]),
        "slug": slug,
        "date": item.get("date"),
        "modified": item.get("modified"),
        "status": item.get("status"),
        "author": author,
        "excerpt": text((item.get("excerpt") or {}).get("rendered")),
        "categories": [cats[c]["slug"] for c in item.get("categories", []) if c in cats],
        "tags": [tags[t]["slug"] for t in item.get("tags", []) if t in tags],
        "caseCategories": [categorias[c]["slug"] for c in item.get("categorias", []) if c in categorias],
        "featuredImage": featured["src"] if featured else None,
        "featuredImageAlt": featured["alt"] if featured else None,
        "template": item.get("template"),
        "parent": item.get("parent") or None,
        "menuOrder": item.get("menu_order") or None,
        "wpId": item["id"],
        "originalUrl": link,
        "contentSource": source,
        "forms": forms or None,
        "seo": seo_of(item),
    }
    path = urlparse(link).path.strip("/") or "index"
    fname = path.split("/")[-1] if kind != "pages" else path.replace("/", "__")
    dest = OUT_CONTENT / {"posts": "blog", "pages": "pages", "cases": "cases"}[kind] / f"{unquote(fname)}.md"
    dest.parent.mkdir(parents=True, exist_ok=True)
    fm_text = frontmatter(data)
    if forms:
        fm_text = fm_text.replace("forms: ", "forms: ")  # já serializado como JSON
    dest.write_text(fm_text + body, encoding="utf-8")
    url_map.append({"url": link, "path": urlparse(link).path, "type": kind, "file": str(dest.relative_to(ROOT)), "wpId": item["id"]})
    return dest


def dedupe_lines(md):
    """Remove blocos repetidos consecutivos (Elementor duplica p/ mobile/desktop)."""
    out, seen_recent = [], []
    for block in md.split("\n\n"):
        b = block.strip()
        if b and b in seen_recent[-6:] and not b.startswith("!["):
            continue
        out.append(block)
        seen_recent.append(b)
    return "\n\n".join(out)


def site_chrome():
    """Captura header/footer/popup da home (menus, logo, rodapé)."""
    r = get(BASE + "/")
    s = BeautifulSoup(r.text, "lxml")
    chrome = {}
    for kind in ("header", "footer", "popup"):
        el = s.select_one(f'[data-elementor-type="{kind}"]')
        if el is None:
            continue
        (OUT_RAW / "_chrome").mkdir(parents=True, exist_ok=True)
        (OUT_RAW / "_chrome" / f"{kind}.html").write_text(str(el), encoding="utf-8")
        links = []
        for a in el.select("a[href]"):
            t = a.get_text(" ", strip=True)
            links.append({"text": t, "href": rewrite_url(a["href"])})
        imgs = [download_asset(best_src(i)) for i in el.select("img") if best_src(i)]
        chrome[kind] = {"links": links, "images": imgs}
    # favicons / ícones
    icons = []
    for l in s.select('link[rel*="icon"]'):
        loc = download_asset(urljoin(BASE, l.get("href", "")))
        if loc:
            icons.append({"rel": " ".join(l.get("rel")), "href": loc, "sizes": l.get("sizes")})
    chrome["icons"] = icons
    (OUT_DATA / "site-chrome.json").write_text(json.dumps(chrome, ensure_ascii=False, indent=2), encoding="utf-8")


def main():
    only = sys.argv[1:] or ["pages", "cases", "posts"]
    terms = build_terms()
    site_chrome()
    url_map = []
    for kind in only:
        items = fetch_all(kind, "&_embed=1&status=publish")
        print(f"{kind}: {len(items)} itens", flush=True)
        for i, it in enumerate(items, 1):
            try:
                d = export_item(it, kind, terms, url_map)
                print(f"  [{i}/{len(items)}] {d.relative_to(ROOT)}", flush=True)
            except Exception as e:  # segue em frente, registra falha
                print(f"  ERRO {it.get('link')}: {e}", flush=True)
    # arquivos de listagem de taxonomias (só snapshot HTML, regenerar no Astro)
    if "cases" in only:
        enrich_cases()
    fetch_live(BASE + "/cases/")  # arquivo de listagem: só snapshot
    prev = OUT_DATA / "url-map.json"
    old = json.loads(prev.read_text()) if prev.exists() else []
    merged = {m["url"]: m for m in old + url_map}
    prev.write_text(json.dumps(list(merged.values()), ensure_ascii=False, indent=2), encoding="utf-8")
    man = OUT_DATA / "image-manifest.json"
    oldm = json.loads(man.read_text()) if man.exists() else {}
    oldm.update(image_manifest)
    man.write_text(json.dumps(oldm, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT_DATA / "failed-assets.json").write_text(json.dumps(sorted(set(failed_assets)), indent=2), encoding="utf-8")
    print(f"assets: {len(image_manifest)} (falhas: {len(set(failed_assets))})")


if __name__ == "__main__":
    main()


def enrich_cases():
    """Cases não têm corpo no WP: o conteúdo real é o card em /materiais/ com link externo."""
    html = (OUT_RAW / "materiais.html").read_text(encoding="utf-8")
    s = BeautifulSoup(html, "lxml")
    cards = {}
    for a in s.select('a[href*="materiais.vertigo.com.br"]'):
        desc = a.get_text("\n", strip=True).replace("\nSaiba mais", "").strip()
        # título = texto imediatamente anterior no card
        title_el = a.find_previous(string=lambda t: t and t.strip() and t.strip() not in desc)
        cards[(title_el or "").strip().lower()] = {"desc": desc, "url": a["href"]}
    for f in (OUT_CONTENT / "cases").glob("*.md"):
        txt = f.read_text(encoding="utf-8")
        title = json.loads(re.search(r'^title: (.*)$', txt, re.M).group(1))
        card = cards.get(title.strip().lower())
        if not card or "externalUrl:" in txt:
            continue
        txt = txt.replace("contentSource:", f"externalUrl: {json.dumps(card['url'])}\ndescription: {json.dumps(card['desc'], ensure_ascii=False)}\ncontentSource:", 1)
        txt = txt.rstrip() + f"\n\n{card['desc']}\n\n[Saiba mais]({card['url']})\n"
        f.write_text(txt, encoding="utf-8")
        print("case enriquecido:", f.name)
