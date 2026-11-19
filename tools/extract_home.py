#!/usr/bin/env python3
"""Extrai os dados estruturados da home (Elementor) para src/data/home.json.

O Markdown de src/content/pages/index.md perde tabs, carrosséis e contadores;
este script lê o snapshot raw-html/index.html e gera os dados que os
componentes Astro da home consomem. Rodar de novo sempre que o dump atualizar.

    .venv/bin/python tools/extract_home.py
"""
import json
import re
from pathlib import Path
from urllib.parse import urlparse

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent.parent
RAW = ROOT / "raw-html" / "index.html"
OUT = ROOT / "src" / "data" / "home.json"
HOST_RE = re.compile(r"^https?://(www\.)?vertigo\.com\.br", re.I)


def local(url):
    """URL do site -> caminho local (/wp-content/... ou /rota/)."""
    if not url:
        return url
    if HOST_RE.match(url):
        return urlparse(url).path or "/"
    return url


def img_src(img):
    for attr in ("data-lazy-src", "data-src", "src"):
        v = img.get(attr)
        if v and not v.startswith("data:"):
            return local(v)
    return None


def txt(el):
    return el.get_text(" ", strip=True) if el else ""


def unique(seq, key=lambda x: x):
    seen, out = set(), []
    for x in seq:
        k = key(x)
        if k and k not in seen:
            seen.add(k)
            out.append(x)
    return out


def own_box(h, sel="h2, h3, h4"):
    """Menor container Elementor que contém apenas este título."""
    box = h
    for parent in h.parents:
        if "e-con" in (parent.get("class") or []):
            if len(parent.select(sel)) > 1:
                break
            box = parent
    return box


def clean_html(el):
    """HTML do text-editor sem spans/estilos inline do Elementor."""
    for span in el.select("span"):
        span.unwrap()
    for t in el.find_all(True):
        t.attrs = {k: v for k, v in t.attrs.items() if k == "href"}
    return el.decode_contents().strip()


def logos(sec):
    return unique(
        [{"src": img_src(i), "alt": i.get("alt") or ""} for i in sec.select("img") if img_src(i)],
        key=lambda x: x["src"],
    )


def main():
    s = BeautifulSoup(RAW.read_text(encoding="utf-8"), "lxml")
    sec = lambda i: s.select_one(f'[data-id="{i}"]')

    # "Somos especialistas em": ícone + título (+ link se houver)
    especialistas = []
    for box in sec("49da2c2").select(".elementor-widget-image-box, .elementor-image-box-wrapper"):
        img, h = box.select_one("img"), box.select_one("h3, .elementor-image-box-title")
        if img and h:
            a = box.select_one("a[href]")
            especialistas.append({"icon": img_src(img), "title": txt(h), "href": local(a["href"]) if a else None})
    especialistas = unique(especialistas, key=lambda x: x["title"])

    # Tabs de soluções: cada tier tem descrição + colunas (título, bullets, link)
    tabs_root = sec("2cbfd952")
    titles = [txt(t) for t in tabs_root.select(".e-n-tab-title-text")] or ["Strategy Tier", "Business Tier", "Tech Tier"]
    panels = tabs_root.select('.e-n-tabs-content > [role="tabpanel"], .e-n-tabs-content > .e-con')
    tiers = []
    for title, panel in zip(titles, panels):
        heads = [h for h in panel.select("h2, h3, h4") if txt(h)]
        desc = next((d for d in panel.select("div.elementor-heading-title") if len(txt(d)) > 60), None)
        cols = []
        for h in heads:
            col = own_box(h)
            bullets = [b.strip("• ").strip() for b in col.get_text("\n", strip=True).split("\n") if b.strip().startswith("•")]
            a = col.select_one("a[href]")
            cols.append({"title": txt(h), "items": bullets, "href": local(a["href"]) if a else None})
        tiers.append({"title": title, "description": txt(desc), "columns": unique(cols, key=lambda c: c["title"])})

    # Depoimentos: blocos texto + nome + cargo
    depoimentos = []
    for slide in sec("6413dbfe").select(".swiper-slide, .e-n-carousel > .e-con"):
        parts = [p for p in slide.get_text("\n", strip=True).split("\n") if p]
        if len(parts) >= 3:
            depoimentos.append({"quote": " ".join(parts[:-2]), "name": parts[-2], "role": parts[-1]})
    depoimentos = unique(depoimentos, key=lambda d: d["name"])

    diferenciais = unique(
        [{"title": txt(b.select_one(".elementor-image-box-title")), "text": txt(b.select_one(".elementor-image-box-description"))}
         for b in sec("d9c0bfa").select(".elementor-image-box-content")],
        key=lambda d: d["title"],
    )

    intro = sec("4c170ea")
    ai = sec("a620ed4")
    ai_imgs = [img_src(i) for i in ai.select("img")]
    ai_heads = ai.select(".elementor-heading-title")
    veecode = sec("6948a7d")

    data = {
        "hero": {
            "title": "Fly your business",
            "subtitle": "Mais de 25 anos de Inteligência Digital para acelerar a transformação de negócios.",
            "cta": {"label": "Converse com um Consultor", "href": "/contato/"},
            "image": "/theme/bg/vertigo-hero-home.jpg",
        },
        "intro": {
            "headline": ["Inteligente.", "Ágil.", "Digital."],
            "html": clean_html(intro.select_one(".elementor-widget-text-editor")),
        },
        "stats": [
            {"value": "25+", "label": "Anos de mercado"},
            {"value": "200+", "label": "Colaboradores"},
            {"value": "50+", "label": "Clientes"},
            {"value": "500+", "label": "Projetos entregues"},
        ],
        "especialistas": especialistas,
        "tiers": tiers,
        "clientes": logos(sec("30c3705")),
        "depoimentos": depoimentos,
        "parceiros": logos(sec("a21a9cd")),
        "aiJourney": {
            "title": txt(ai_heads[0]),
            "subtitle": txt(ai_heads[1]),
            "badge": txt(ai_heads[2]),
            "href": "/ai-journey/",
            "logo": ai_imgs[0] if ai_imgs else None,
            "image": ai_imgs[1] if len(ai_imgs) > 1 else None,
            "paragraphs": [txt(p) for p in ai.select(".elementor-widget-text-editor p")],
        },
        "veecode": {
            "eyebrow": "VeeCode",
            "title": txt(veecode.select_one("h2")),
            "text": txt(veecode.select("div.elementor-heading-title")[0]),
            "cta": txt(veecode.select_one("a[href]")),
            "image": img_src(veecode.select_one("img")),
            "href": veecode.select_one("a[href]")["href"],
        },
        "diferenciais": diferenciais,
        "certificacoes": logos(sec("c5e15ca")),
        "carreiras": {
            "title": "Trabalhe conosco",
            "eyebrow": "Carreiras",
            "heading": txt(sec("3596471").select_one("h2")),
            "paragraphs": [p for d in sec("3596471").select("div.elementor-heading-title") for p in d.get_text("\n", strip=True).split("\n")],
            "href": "/carreiras/",
            "image": "/wp-content/uploads/2026/02/vertigo-driven-pg-carreiras.jpeg",
            "background": "/theme/bg/fundo-trabalhe.jpg",
        },
    }
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
    for k, v in data.items():
        print(f"{k}: {len(v) if isinstance(v, list) else 'ok'}")


if __name__ == "__main__":
    main()
