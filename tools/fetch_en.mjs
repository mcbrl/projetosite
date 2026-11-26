#!/usr/bin/env node
// Copia a versão em inglês (GTranslate em en.vertigo.com.br) de todo o conteúdo do dump.
// Para cada src/content/{pages,blog,cases}/*.md busca https://en.vertigo.com.br<caminho>,
// extrai o mesmo trecho que o clone_site.py extrai do português e grava
// src/content/en/<tipo>/<arquivo>.md com o frontmatter do original + título/SEO/resumo em inglês.
//
//   node tools/fetch_en.mjs            # tudo
//   node tools/fetch_en.mjs blog       # só um tipo
//   node tools/fetch_en.mjs --force    # refaz arquivos já gerados
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const EN = "https://en.vertigo.com.br";
const HOST_RE = /^https?:\/\/(?:www\.|en\.)?vertigo\.com\.br/i;
const SIZE_RE = /-\d+x\d+(?=\.\w+$)/;
const KINDS = ["pages", "blog", "cases"];
const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const kinds = only.length ? only : KINDS;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function get(url) {
  for (let i = 0; i < 5; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (site-vertigo en mirror)" }, redirect: "follow" });
      if ([429, 500, 502, 503, 504].includes(r.status)) { await sleep(2000 * (i + 1)); continue; }
      return { status: r.status, text: await r.text() };
    } catch { await sleep(2000 * (i + 1)); }
  }
  return null;
}

// ---------- frontmatter (o dump grava "chave: <json>", com seo: aninhado)
function splitFm(src) {
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  return m ? { fm: m[1], body: src.slice(m[0].length) } : { fm: "", body: src };
}
function setFm(fm, key, value, nested = false) {
  if (value == null || value === "") return fm;
  const line = `${nested ? "  " : ""}${key}: ${JSON.stringify(value)}`;
  const re = new RegExp(`^${nested ? "  " : ""}${key}: .*$`, "m");
  if (re.test(fm)) return fm.replace(re, () => line);
  if (nested) return /^seo:$/m.test(fm) ? fm.replace(/^seo:$/m, `seo:\n${line}`) : `${fm}\nseo:\n${line}`;
  // chave de topo: insere antes do bloco seo (YAML continua válido)
  return /^seo:$/m.test(fm) ? fm.replace(/^seo:$/m, `${line}\nseo:`) : `${fm}\n${line}`;
}

// ---------- HTML -> Markdown (equivalente ao markdownify do clone_site.py)
const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced", emDelimiter: "*" });
td.keep(["iframe", "video"]);
td.remove(["script", "style", "noscript"]);

function bestSrc($img) {
  const cands = [];
  for (const attr of ["srcset", "data-srcset", "data-lazy-srcset"]) {
    const v = $img.attr(attr);
    if (v) for (const part of v.split(",")) {
      const [u, w] = part.trim().split(/\s+/);
      if (u) cands.push([parseInt(w) || 0, u]);
    }
  }
  const src = $img.attr("data-lazy-src") || $img.attr("data-src") || $img.attr("src");
  if (src && !src.startsWith("data:")) cands.push([parseInt($img.attr("width")) || 0, src]);
  cands.sort((a, b) => b[0] - a[0]);
  return cands[0]?.[1];
}
function localUpload(url) {
  if (url.startsWith("//")) url = "https:" + url;
  const path = decodeURIComponent(url.replace(HOST_RE, "").split(/[?#]/)[0]);
  if (!path.startsWith("/wp-content/")) return null;
  const orig = path.replace(SIZE_RE, "");
  if (existsSync(join(ROOT, "public", orig))) return orig;
  return path;
}
function rewriteHref(href) {
  if (!href) return href;
  if (href.startsWith("//")) href = "https:" + href;
  if (!HOST_RE.test(href)) return href;
  if (href.includes("/wp-content/")) return localUpload(href) ?? href;
  const path = href.replace(HOST_RE, "") || "/";
  return "/en" + (path.startsWith("/") ? path : "/" + path);
}

function clean($, el) {
  el.find("*").contents().filter((_, n) => n.type === "comment").remove();
  el.find("script, style, noscript, svg, form, .elementor-hidden-desktop, .screen-reader-text").remove();
  el.find(".elementor-counter-number[data-to-value]").each((_, n) => { $(n).text($(n).attr("data-to-value")); });
  el.find("img").each((_, n) => {
    const $n = $(n);
    const src = bestSrc($n);
    if (!src) return void $n.remove();
    const local = localUpload(src);
    const attrs = { src: local ?? src, alt: $n.attr("alt") ?? "", title: $n.attr("title") };
    for (const a of Object.keys(n.attribs)) $n.removeAttr(a);
    for (const [k, v] of Object.entries(attrs)) if (v != null) $n.attr(k, v);
  });
  el.find("a[href]").each((_, n) => { $(n).attr("href", rewriteHref($(n).attr("href"))); });
  el.find("span").each((_, n) => { $(n).replaceWith($(n).contents()); });
  return el;
}
function toMd(html) {
  return td.turndown(html).replace(/^(\s*)-   /gm, "$1- ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
}
function dedupe(md) {
  const out = [], recent = [];
  for (const block of md.split("\n\n")) {
    const b = block.trim();
    if (b && recent.slice(-6).includes(b) && !b.startsWith("![")) continue;
    out.push(block); recent.push(b);
  }
  return out.join("\n\n");
}
const words = (s) => s.replace(/\s+/g, " ").trim().split(" ");
function excerptOf(md) {
  const plain = md.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/^#+\s.*$/gm, "").replace(/[*_`>#|-]/g, " ");
  const w = words(plain).filter(Boolean);
  return w.length > 55 ? w.slice(0, 55).join(" ") + " […]" : w.join(" ");
}

async function convert(kind, file) {
  const dest = join(ROOT, "src/content/en", kind, file);
  if (!force && existsSync(dest)) return "skip";
  const src = readFileSync(join(ROOT, "src/content", kind, file), "utf8").replace(/\r\n/g, "\n");
  let { fm } = splitFm(src);
  const orig = fm.match(/^originalUrl: (.*)$/m);
  if (!orig) return "sem originalUrl";
  const path = new URL(JSON.parse(orig[1])).pathname;
  const source = JSON.parse(fm.match(/^contentSource: (.*)$/m)?.[1] ?? '"rest"');
  const r = await get(EN + path);
  if (!r || r.status !== 200) return `HTTP ${r?.status ?? "erro"}`;
  const $ = cheerio.load(r.text);
  if (kind === "pages") {
    const raw = join(ROOT, "raw-html/en", (path.replace(/^\/|\/$/g, "") || "index") + ".html");
    mkdirSync(dirname(raw), { recursive: true });
    writeFileSync(raw, r.text);
  }

  let frag = source === "rest" ? $(".elementor-widget-theme-post-content").first() : $();
  if (!frag.length) frag = $('[data-elementor-type="wp-page"], [data-elementor-type="wp-post"], [data-elementor-type="single-post"], [data-elementor-type="single"]').first();
  if (!frag.length) frag = $("main, article, #content").first();
  let body = frag.length ? toMd(clean($, frag).html() ?? "") : "";
  if (source !== "rest") body = dedupe(body);

  const metaTitle = $("title").first().text().trim();
  const metaDesc = $('meta[name="description"]').attr("content")?.trim() || $('meta[property="og:description"]').attr("content")?.trim();
  const h1 = $("h1").first().text().replace(/\s+/g, " ").trim();
  const title = kind === "blog" ? (h1 || metaTitle) : (h1 || metaTitle);

  fm = setFm(fm, "title", title);
  if (/^excerpt: /m.test(fm)) fm = setFm(fm, "excerpt", excerptOf(body));
  if (/^description: /m.test(fm) && kind === "cases") {
    const d = $(".elementor-flip-box__layer__description").first().text().trim();
    if (d) fm = setFm(fm, "description", d);
  }
  fm = setFm(fm, "lang", "en");
  fm = setFm(fm, "title", metaTitle, true);
  fm = setFm(fm, "description", metaDesc, true);
  fm = fm.replace(/^  canonical: .*$/m, () => `  canonical: ${JSON.stringify("https://vertigo.com.br/en" + path)}`);

  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, `---\n${fm}\n---\n\n${body}`);
  return "ok";
}

const jobs = kinds.flatMap((k) => readdirSync(join(ROOT, "src/content", k)).filter((f) => f.endsWith(".md")).map((f) => [k, f]));
let done = 0;
const fails = [];
async function worker() {
  while (jobs.length) {
    const [k, f] = jobs.shift();
    const res = await convert(k, f).catch((e) => `erro: ${e.message}`);
    done++;
    if (res !== "ok" && res !== "skip") fails.push(`${k}/${f}: ${res}`);
    if (done % 20 === 0 || res !== "ok") console.log(`[${done}] ${k}/${f}: ${res}`);
    await sleep(150);
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
console.log(`fim: ${done} arquivos, ${fails.length} falhas`);
if (fails.length) writeFileSync(join(ROOT, "data/en-fetch-failures.json"), JSON.stringify(fails, null, 2));
