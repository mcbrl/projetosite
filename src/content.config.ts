import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// O dump grava `slug` no frontmatter; o glob loader usaria isso como id
// (index.md viraria "home"). Usamos o nome do arquivo e roteamos por originalUrl.
const idFromFile = ({ entry }: { entry: string }) => entry.replace(/\.md$/, "");

const seo = z
  .object({
    title: z.string(),
    description: z.string(),
    canonical: z.string(),
    ogImage: z.string(),
    robots: z.string(),
  })
  .partial()
  .optional();

// Tudo opcional e "loose": o dump ainda está rodando e pode adicionar campos.
const base = {
  title: z.string(),
  slug: z.string().optional(),
  date: z.coerce.date().optional(),
  modified: z.coerce.date().optional(),
  status: z.string().optional(),
  author: z.string().optional(),
  excerpt: z.string().optional(),
  featuredImage: z.string().optional(),
  featuredImageAlt: z.string().optional(),
  wpId: z.number().optional(),
  originalUrl: z.string().optional(),
  contentSource: z.string().optional(),
  forms: z.array(z.any()).optional(),
  seo,
};

const pages = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/pages", generateId: idFromFile }),
  schema: z.looseObject({
    ...base,
    template: z.string().optional(),
    parent: z.number().optional(),
    menuOrder: z.number().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog", generateId: idFromFile }),
  schema: z.looseObject({
    ...base,
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const cases = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cases", generateId: idFromFile }),
  schema: z.looseObject({
    ...base,
    caseCategories: z.array(z.string()).default([]),
    externalUrl: z.string().optional(),
    description: z.string().optional(),
  }),
});

// Versão em inglês (tools/fetch_en.mjs): mesmos arquivos/frontmatter, textos do en.vertigo.com.br.
const en = <T extends { loader: unknown; schema?: unknown }>(c: T, dir: string) =>
  defineCollection({ ...c, loader: glob({ pattern: "*.md", base: `./src/content/en/${dir}`, generateId: idFromFile }) } as T);
const pagesEn = en(pages, "pages");
const blogEn = en(blog, "blog");
const casesEn = en(cases, "cases");

export const collections = { pages, blog, cases, pagesEn, blogEn, casesEn };
