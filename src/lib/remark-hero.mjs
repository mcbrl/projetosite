/**
 * Páginas exportadas do Elementor começam com "###### EYEBROW" + "# Título",
 * que no site original ficam no hero. Este plugin remove esses nós do corpo e
 * os expõe em `remarkPluginFrontmatter.heroEyebrow` / `heroTitle`.
 * Um H1 isolado no fim (ex.: "Fale com a gente para saber mais") é o título do
 * formulário lateral e vira `formTitle`.
 */
const text = (node) =>
  node.type === "text" || node.type === "inlineCode"
    ? node.value
    : (node.children ?? []).map(text).join("");

export function remarkHero() {
  return (tree, file) => {
    const fm = (file.data.astro ??= {}).frontmatter ??= {};
    const kids = tree.children;
    let i = 0;
    if (kids[i]?.type === "heading" && kids[i].depth === 6) {
      fm.heroEyebrow = text(kids[i]).trim();
      i++;
    }
    if (kids[i]?.type === "heading" && kids[i].depth === 1) {
      fm.heroTitle = text(kids[i]).trim();
      i++;
    }
    let end = kids.length;
    const last = kids[end - 1];
    if (end - 1 > i && last?.type === "heading" && last.depth === 1) {
      fm.formTitle = text(last).trim();
      end--;
    }
    tree.children = kids.slice(i, end);
  };
}
