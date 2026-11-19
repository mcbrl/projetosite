#!/usr/bin/env python3
"""Extrai metadados de layout das páginas Elementor para src/data/pages.json.

Para cada página em data/url-map.json:
  - imagem de fundo do hero (definida no CSS gerado do Elementor, que o dump
    não espelha) -> baixada em public/theme/bg/
  - formulário HubSpot (formPT) usado na página, se houver

    .venv/bin/python tools/extract_pages.py
"""
import json
import re
from pathlib import Path
from urllib.parse import urlparse, unquote

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
BASE = "https://vertigo.com.br"
CACHE = ROOT / "tools" / ".cache"
BG_DIR = ROOT / "public" / "theme" / "bg"
OUT = ROOT / "src" / "data" / "pages.json"

# formulários globais (footer, WhatsApp) — não contam como formulário da página
GLOBAL_FORMS = {"768dedaa-5f81-4132-b47c-02d5ecdd5714", "2eecb970-17c0-4918-8d57-eb3552c49c56"}

S = requests.Session()
S.headers["User-Agent"] = "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/128 Safari/537.36"


def cached(url):
    CACHE.mkdir(parents=True, exist_ok=True)
    f = CACHE / re.sub(r"[^\w.-]", "_", url.split("//", 1)[-1])
    if not f.exists():
        r = S.get(url, timeout=60)
        f.write_bytes(r.content if r.ok else b"")
    return f.read_bytes()


def download_bg(url):
    url = url.split("?")[0]
    if url.startswith("/"):
        url = BASE + url
    name = unquote(Path(urlparse(url).path).name)
    dest = BG_DIR / name
    if not dest.exists():
        data = cached(url)
        if not data:
            return None
        BG_DIR.mkdir(parents=True, exist_ok=True)
        dest.write_bytes(data)
    return f"/theme/bg/{name}"


def bg_for(css, data_id):
    """background-image declarado para .elementor-element-<id> (desktop)."""
    for m in re.finditer(r"([^{}]*\.elementor-element-" + re.escape(data_id) + r"[^{}]*)\{([^}]*)\}", css):
        sel, body = m.groups()
        if "@media" in sel:
            continue
        u = re.search(r"background-image:\s*url\(\s*['\"]?([^'\")]+)", body)
        if u:
            return u.group(1)
    return None


def main():
    url_map = json.loads((ROOT / "data" / "url-map.json").read_text())
    out = {}
    for entry in url_map:
        if entry["type"] != "pages":
            continue
        raw = ROOT / "raw-html" / ((entry["path"].strip("/") or "index") + ".html")
        if not raw.exists():
            continue
        html = raw.read_text(encoding="utf-8")
        s = BeautifulSoup(html, "lxml")
        page = s.select_one('[data-elementor-type="wp-page"]')
        info = {}
        if page is not None:
            css = cached(f"{BASE}/wp-content/uploads/elementor/css/post-{page['data-elementor-id']}.css").decode("utf-8", "ignore")
            first = page.find(attrs={"data-element_type": "container"})
            if first is not None:
                ids = [first["data-id"]] + [c["data-id"] for c in first.find_all(attrs={"data-element_type": "container"})][:3]
                for i in ids:
                    u = bg_for(css, i)
                    if u:
                        info["heroImage"] = download_bg(u)
                        break
        forms = [f for f in re.findall(r"formPT\s*[:=]\s*[\"']([0-9a-f-]{36})", html) if f not in GLOBAL_FORMS]
        if forms:
            info["hubspotForm"] = forms[0]
        out[entry["path"]] = info
        print(entry["path"], info)
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
