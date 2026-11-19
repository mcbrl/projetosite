// Verifica links e assets internos (href/src começando com "/") de todo dist/.
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith(".html") && files.push(p); });
walk("dist");

const exists = (url) => {
  let p = decodeURIComponent(url.split(/[?#]/)[0]);
  if (!p || p === "/") return true;
  const f = join("dist", p);
  return existsSync(f) && statSync(f).isFile() ? true : existsSync(join(f, "index.html"));
};

const missing = new Map(); // url -> páginas
for (const file of files) {
  const html = readFileSync(file, "utf8");
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"/][^"]*|\/)"/g)) {
    if (url.startsWith("//") || exists(url)) continue;
    if (!missing.has(url)) missing.set(url, new Set());
    missing.get(url).add(file.replace(/^dist/, "").replace(/index\.html$/, ""));
  }
}
const groups = {};
for (const url of missing.keys()) {
  const key = url.startsWith("/wp-content/") ? "asset /wp-content (falhou no dump)" : /^\/(category|tag|author)\//.test(url) ? `arquivo /${url.split("/")[1]}/` : !url.split(/[?#]/)[0].endsWith("/") && !/\.\w+$/.test(url.split(/[?#]/)[0]) ? "sem barra final" : "outros";
  (groups[key] ??= []).push(url);
}
console.log(`${files.length} páginas, ${missing.size} URLs internas quebradas`);
for (const [k, urls] of Object.entries(groups)) {
  console.log(`\n${k}: ${urls.length}`);
  urls.slice(0, 8).forEach((u) => console.log(`  ${u}  (${[...missing.get(u)].slice(0, 2).join(", ")}${missing.get(u).size > 2 ? ", …" : ""})`));
}
