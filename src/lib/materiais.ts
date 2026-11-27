// Lista de materiais (cases e ebooks) na ordem do site atual.
// Os 10 cases publicados depois do dump vêm de src/data/materiais-novos.json (imagens em public/wp-content/uploads/2026/11/,
// baixadas de vertigo.com.br); os demais vêm da coleção "cases" do dump.
import { getCollection } from "astro:content";
import novos from "../data/materiais-novos.json";
import en from "../data/materiais-en.json";
import { href, type Lang } from "./i18n";
import { isPublished } from "./routes";

type Tr = Record<string, { title: string; description: string }>;

export interface Material {
  title: string;
  description: string;
  image?: string;
  href: string;
  external: boolean;
  categories: string[];
}

export async function materiais(lang: Lang = "pt"): Promise<Material[]> {
  const t = (id: string | number | undefined) => (lang === "en" && id != null ? (en as Tr)[String(id)] : undefined);
  const dump = (await getCollection("cases"))
    .filter(isPublished)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0))
    .map((item) => ({
      title: t(item.data.wpId)?.title ?? item.data.title,
      description: t(item.data.wpId)?.description ?? (item.data.description ?? item.data.excerpt ?? "").replace(/\s*\[…\]$/, "…"),
      image: item.data.featuredImage,
      href: item.data.externalUrl ?? href(lang, `/cases/${item.id}/`),
      external: !!item.data.externalUrl,
      categories: item.data.caseCategories,
    }));
  const extra = novos.map((n) => ({ ...n, ...t(n.id), external: true }));
  return [...extra, ...dump];
}
