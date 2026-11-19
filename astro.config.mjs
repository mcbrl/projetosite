// @ts-check
import { defineConfig } from "astro/config";
import { remarkHero } from "./src/lib/remark-hero.mjs";

export default defineConfig({
  site: "https://vertigo.com.br",
  // Mantém as URLs do WordPress (todas terminam em "/")
  trailingSlash: "always",
  build: { format: "directory" },
  markdown: {
    remarkPlugins: [remarkHero],
  },
});
