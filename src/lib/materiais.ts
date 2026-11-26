// Lista de materiais (cases e ebooks) na ordem do site atual.
// Os 10 cases publicados depois do dump vêm de src/data/materiais-novos.json (imagens servidas de
// vertigo.com.br); os demais vêm da coleção "cases" do dump.
import { getCollection } from "astro:content";
import novos from "../data/materiais-novos.json";
import { isPublished } from "./routes";

export interface Material {
  title: string;
  description: string;
  image?: string;
  href: string;
  external: boolean;
  categories: string[];
}

export async function materiais(): Promise<Material[]> {
  const dump = (await getCollection("cases"))
    .filter(isPublished)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0))
    .map((item) => ({
      title: item.data.title,
      description: (item.data.description ?? item.data.excerpt ?? "").replace(/\s*\[…\]$/, "…"),
      image: item.data.featuredImage,
      href: item.data.externalUrl ?? `/cases/${item.id}/`,
      external: !!item.data.externalUrl,
      categories: item.data.caseCategories,
    }));
  const extra = novos.map((n) => ({ ...n, external: true }));
  return [...extra, ...dump];
}
