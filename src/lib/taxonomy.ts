import { getCollection, type CollectionEntry } from "astro:content";
import categories from "../../data/categories.json";
import tags from "../../data/tags.json";
import { PER_PAGE, decodeHtml, sortPosts } from "./routes";

export type TaxKind = "category" | "tag";
type Term = { slug: string; name: string };

const terms: Record<TaxKind, Term[]> = { category: categories, tag: tags };

/** Rótulo do hero ("Categoria" / "Tag"). */
export const TAX_LABEL: Record<TaxKind, string> = { category: "Categoria", tag: "Tag" };

/** Caminho do arquivo do termo, idêntico ao WordPress (/category/slug/, /tag/slug/). */
export const termPath = (kind: TaxKind, slug: string) => `/${kind}/${slug}/`;

/**
 * Páginas estáticas de um tipo de taxonomia: uma por termo com posts publicados,
 * paginadas como o índice do blog. `paged` gera /page/N/ (N ≥ 2); sem ele, só a página 1.
 */
export async function taxonomyPaths(kind: TaxKind, { paged }: { paged: boolean }) {
  const posts = sortPosts(await getCollection("blog"));
  const field = kind === "category" ? "categories" : "tags";
  const routes = [];
  for (const term of terms[kind]) {
    const list = posts.filter((p: CollectionEntry<"blog">) => p.data[field].includes(term.slug));
    if (!list.length) continue;
    const last = Math.ceil(list.length / PER_PAGE);
    const name = decodeHtml(term.name);
    const pages = paged ? Array.from({ length: last - 1 }, (_, i) => i + 2) : [1];
    for (const current of pages) {
      routes.push({
        params: paged ? { slug: term.slug, page: String(current) } : { slug: term.slug },
        props: { kind, slug: term.slug, name, posts: list.slice((current - 1) * PER_PAGE, current * PER_PAGE), current, last, total: list.length },
      });
    }
  }
  return routes;
}
