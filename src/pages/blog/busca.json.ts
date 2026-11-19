import { getCollection } from "astro:content";
import { categoryNames, pathOf, sortPosts } from "../../lib/routes";

// Índice estático para a busca do blog (carregado sob demanda).
export async function GET() {
  const posts = sortPosts(await getCollection("blog"));
  const index = posts.map((p) => ({
    t: p.data.title,
    u: pathOf(p),
    e: (p.data.excerpt ?? "").slice(0, 220),
    c: categoryNames(p.data.categories).join(", "),
    i: p.data.featuredImage,
  }));
  return new Response(JSON.stringify(index), { headers: { "Content-Type": "application/json" } });
}
