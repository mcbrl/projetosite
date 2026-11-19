"""Baixa assets que só aparecem em CSS do Elementor / data-settings JSON."""
import json, re, sys
from pathlib import Path
from urllib.parse import urljoin
sys.path.insert(0, str(Path(__file__).parent))
import clone_site as c

man_path = c.OUT_DATA / "image-manifest.json"
c.image_manifest.update(json.loads(man_path.read_text()))
before = len(c.image_manifest)
css_urls, asset_urls = set(), set()
for f in c.OUT_RAW.rglob("*.html"):
    t = f.read_text(encoding="utf-8").replace("\\/", "/")
    for u in re.findall(r"https?://(?:www\.)?vertigo\.com\.br/wp-content/[^\s\"'()<>\\]+", t):
        (css_urls if ".css" in u.split("?")[0][-5:] else asset_urls).add(u.split("?")[0])
for css in sorted(css_urls):
    local = c.download_asset(css)
    p = c.OUT_PUBLIC / local.lstrip("/")
    if p.exists():
        for u in re.findall(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)", p.read_text(errors="ignore")):
            if not u.startswith("data:"):
                asset_urls.add(urljoin(css, u).split("?")[0])
for u in sorted(asset_urls):
    if "/wp-content/uploads/" in u or "/wp-content/themes/" in u or "/wp-content/plugins/" in u:
        c.download_asset(u)
man_path.write_text(json.dumps(c.image_manifest, ensure_ascii=False, indent=2))
print("css:", len(css_urls), "novos assets:", len(c.image_manifest) - before, "falhas novas:", len(set(c.failed_assets)))
json.dump(sorted(set(c.failed_assets)), open(c.OUT_DATA / "failed-assets-extra.json", "w"), indent=2)
