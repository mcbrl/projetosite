// getStaticPaths compartilhados pelas rotas em português (raiz) e em inglês (/en/).
import { CUSTOM_ROUTES, PER_PAGE, casesOf, categoryNames, isPublished, pagesOf, pathOf, postsOf, sortPosts, toParam } from "./routes";
import type { Lang } from "./i18n";

const strip = (lang: Lang, path: string) => (lang === "en" ? path.replace(/^\/en(?=\/)/, "") : path);

/** Catch-all: páginas do WordPress e posts (que ficam na raiz). */
export async function contentPaths(lang: Lang) {
  const pages = (await pagesOf(lang)).filter(isPublished);
  const posts = (await postsOf(lang)).filter(isPublished);
  const seen = new Map<string, string>();
  const routes = [];
  for (const entry of [...pages, ...posts]) {
    const path = pathOf(entry);
    if (CUSTOM_ROUTES.has(strip(lang, path))) continue;
    const key = `${entry.collection}/${entry.id}`;
    if (seen.has(path)) throw new Error(`Caminho duplicado ${path}: ${seen.get(path)} e ${key}`);
    seen.set(path, key);
    routes.push({ params: { slug: toParam(strip(lang, path)) }, props: { entry } });
  }
  return routes;
}

/** /blog/page/N/ (N ≥ 2). */
export async function blogPagePaths(lang: Lang) {
  const posts = sortPosts(await postsOf(lang));
  const last = Math.ceil(posts.length / PER_PAGE);
  return Array.from({ length: Math.max(0, last - 1) }, (_, i) => {
    const n = i + 2;
    return { params: { page: String(n) }, props: { posts: posts.slice((n - 1) * PER_PAGE, n * PER_PAGE), current: n, last } };
  });
}

/** /cases/<slug>/ */
export async function casePaths(lang: Lang) {
  return (await casesOf(lang)).filter(isPublished).map((entry) => ({
    params: { slug: toParam(strip(lang, pathOf(entry))).replace(/^cases\//, "") },
    props: { entry },
  }));
}

/** Índice estático da busca do blog. */
export async function blogSearch(lang: Lang) {
  const posts = sortPosts(await postsOf(lang));
  const index = posts.map((p) => ({
    t: p.data.title,
    u: pathOf(p),
    e: (p.data.excerpt ?? "").slice(0, 220),
    c: categoryNames(p.data.categories, { lang }).join(", "),
    i: p.data.featuredImage,
  }));
  return new Response(JSON.stringify(index), { headers: { "Content-Type": "application/json" } });
}
