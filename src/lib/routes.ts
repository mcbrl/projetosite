import { getCollection, type CollectionEntry } from "astro:content";
import categories from "../../data/categories.json";
import pageMeta from "../data/pages.json";
import type { Lang } from "./i18n";

type Entry = CollectionEntry<"pages" | "blog" | "cases" | "pagesEn" | "blogEn" | "casesEn">;
export type PageEntry = CollectionEntry<"pages" | "pagesEn">;
export type PostEntry = CollectionEntry<"blog" | "blogEn">;
export type CaseEntry = CollectionEntry<"cases" | "casesEn">;

/** Coleções do idioma (as em inglês ficam em src/content/en). */
export const pagesOf = (lang: Lang): Promise<PageEntry[]> => getCollection(lang === "en" ? "pagesEn" : "pages");
export const postsOf = (lang: Lang): Promise<PostEntry[]> => getCollection(lang === "en" ? "blogEn" : "blog");
export const casesOf = (lang: Lang): Promise<CaseEntry[]> => getCollection(lang === "en" ? "casesEn" : "cases");
export const entryLang = (e: Entry): Lang => (e.collection.endsWith("En") ? "en" : "pt");

/** Rotas com template próprio em src/pages (não passam pelo catch-all). */
export const CUSTOM_ROUTES = new Set([
  "/", "/blog/", "/materiais/", "/solucoes/", "/contato/",
  "/carreiras/", "/ai-journey/", "/parceiros/",
]);

/** Caminho público da entrada, idêntico ao WordPress (ex.: "/a-mulher-na-ti/"). */
export function pathOf(entry: Entry): string {
  const lp = entryLang(entry) === "en" ? "/en" : "";
  if (entry.data.originalUrl) {
    const p = decodeURI(new URL(entry.data.originalUrl).pathname);
    return lp + (p.endsWith("/") ? p : `${p}/`);
  }
  const prefix = entry.collection.startsWith("cases") ? "/cases" : "";
  return `${lp}${prefix}/${entry.id}/`;
}

/** "/a/b/" -> "a/b" (param de rota rest) */
export const toParam = (path: string) => path.replace(/^\/|\/$/g, "");

export const isPublished = (e: Entry) => (e.data.status ?? "publish") === "publish";

export type PageMeta = { heroImage?: string; hubspotForm?: string };
/** Hero e formulário extraídos do Elementor (tools/extract_pages.py). */
export const metaOf = (path: string): PageMeta => (pageMeta as Record<string, PageMeta>)[path] ?? {};

/** Entrada de `pages` no caminho dado (sem /en; o idioma escolhe a coleção). */
export async function pageAt(path: string, lang: Lang = "pt"): Promise<PageEntry | undefined> {
  const full = (lang === "en" ? "/en" : "") + path;
  return (await pagesOf(lang)).find((p) => pathOf(p) === full);
}

const catNames = new Map(categories.map((c: { slug: string; name: string }) => [c.slug, c.name]));

/** Nomes das categorias em inglês (só os que mudam). */
const CAT_EN: Record<string, string> = {
  "a-vertigo": "Vertigo", acessibilidade: "Accessibility", "agentes-de-ia": "AI Agents", "banco-de-dados": "Databases",
  "desenvolvimento-de-software": "Software Development", "gestao-de-performance-digital": "Digital Performance Management",
  ia: "AI", infraestrutura: "Infrastructure", "inteligencia-artificial": "Artificial Intelligence", mensageria: "Messaging",
  microsservicos: "Microservices", "mundo-das-apis": "World of APIs", "nao-categorizado": "Uncategorized",
  "novidades-na-ti": "IT News", nuvem: "Cloud", observabilidade: "Observability", "plataformas-de-integracao": "Integration Platforms",
  "plataformas-digitais": "Digital Platforms", "seguranca-digital": "Digital Security", "setor-de-seguros": "Insurance Sector",
  "setor-financeiro": "Financial Sector", "setor-publico": "Public Sector", "transformacao-cloud-native": "Cloud Native Transformation",
  "transformacao-digital": "Digital Transformation", hashicorp: "HashiCorp", devsecops: "DevSecOps",
};
export const categoryName = (slug: string, lang: Lang = "pt") =>
  (lang === "en" && CAT_EN[slug]) || decodeHtml(catNames.get(slug) ?? slug);

/** Nomes das categorias do post (por padrão sem a genérica "blog", como nos cards). */
export function categoryNames(slugs: string[] = [], { keepBlog = false, lang = "pt" as Lang } = {}): string[] {
  return slugs.filter((s) => keepBlog || s !== "blog").map((s) => categoryName(s, lang));
}

export function decodeHtml(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "’").replace(/&quot;/g, '"');
}

export const formatDate = (d?: Date, lang: Lang = "pt") =>
  d ? d.toLocaleDateString(lang === "en" ? "en-US" : "pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Sao_Paulo" }) : "";

/** Posts publicados, do mais novo para o mais antigo. */
export function sortPosts<T extends PostEntry>(posts: T[]): T[] {
  return posts
    .filter(isPublished)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

/** Posts por página no índice do blog (/blog/ e /blog/page/N/). */
export const PER_PAGE = 9;
