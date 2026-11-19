import { getCollection, type CollectionEntry } from "astro:content";
import categories from "../../data/categories.json";
import pageMeta from "../data/pages.json";

type Entry = CollectionEntry<"pages" | "blog" | "cases">;

/** Rotas com template próprio em src/pages (não passam pelo catch-all). */
export const CUSTOM_ROUTES = new Set(["/", "/blog/", "/materiais/", "/solucoes/", "/contato/"]);

/** Caminho público da entrada, idêntico ao WordPress (ex.: "/a-mulher-na-ti/"). */
export function pathOf(entry: Entry): string {
  if (entry.data.originalUrl) {
    const p = decodeURI(new URL(entry.data.originalUrl).pathname);
    return p.endsWith("/") ? p : `${p}/`;
  }
  const prefix = entry.collection === "cases" ? "/cases" : "";
  return `${prefix}/${entry.id}/`;
}

/** "/a/b/" -> "a/b" (param de rota rest) */
export const toParam = (path: string) => path.replace(/^\/|\/$/g, "");

export const isPublished = (e: Entry) => (e.data.status ?? "publish") === "publish";

export type PageMeta = { heroImage?: string; hubspotForm?: string };
/** Hero e formulário extraídos do Elementor (tools/extract_pages.py). */
export const metaOf = (path: string): PageMeta => (pageMeta as Record<string, PageMeta>)[path] ?? {};

/** Entrada da coleção `pages` publicada no caminho dado. */
export async function pageAt(path: string): Promise<CollectionEntry<"pages"> | undefined> {
  return (await getCollection("pages")).find((p) => pathOf(p) === path);
}

const catNames = new Map(categories.map((c: { slug: string; name: string }) => [c.slug, c.name]));

/** Nomes das categorias do post (por padrão sem a genérica "blog", como nos cards). */
export function categoryNames(slugs: string[] = [], { keepBlog = false } = {}): string[] {
  return slugs.filter((s) => keepBlog || s !== "blog").map((s) => decodeHtml(catNames.get(s) ?? s));
}

export function decodeHtml(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "’").replace(/&quot;/g, '"');
}

export const formatDate = (d?: Date) =>
  d ? d.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Sao_Paulo" }) : "";

/** Posts publicados, do mais novo para o mais antigo. */
export function sortPosts<T extends CollectionEntry<"blog">>(posts: T[]): T[] {
  return posts
    .filter(isPublished)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));
}

/** Posts por página no índice do blog (/blog/ e /blog/page/N/). */
export const PER_PAGE = 9;
