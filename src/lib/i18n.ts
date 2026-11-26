// Idiomas do site: português na raiz, inglês sob /en/ (textos copiados do GTranslate de en.vertigo.com.br).
export type Lang = "pt" | "en";

/** Idioma pelo caminho da URL. */
export const langOf = (url: URL | string): Lang => {
  const p = typeof url === "string" ? url : url.pathname;
  return p === "/en" || p.startsWith("/en/") ? "en" : "pt";
};

const isAsset = (p: string) => /^\/(wp-content|theme|_astro|favicon)/.test(p);

/** Prefixa caminhos internos com /en quando o idioma é inglês. */
export const href = (lang: Lang, path: string) =>
  lang === "en" && path.startsWith("/") && !path.startsWith("/en/") && !isAsset(path) ? `/en${path}` : path;

/** Caminho sem o prefixo de idioma. */
export const stripLang = (path: string) => (path === "/en" ? "/" : path.replace(/^\/en(?=\/)/, ""));

/** O mesmo caminho no outro idioma (bandeiras). */
export const pathIn = (lang: Lang, path: string) => href(lang, stripLang(path));

const pt = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  skip: "Pular para o conteúdo",
  home: "início",
  cta: "Converse com um Consultor",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",
  mainMenu: "Menu principal",
  langPt: "Português",
  langEn: "English",
  quickAccess: "Acesso Rápido",
  whereWeAre: "Onde Estamos",
  newsletter: "Newsletter",
  copyright: (y: number) => `Copyright © ${y} Vertigo - Todos os direitos reservados.`,
  credits: "Desenvolvido por:",
  learnMore: "Saiba mais",
  prev: "Anterior",
  next: "Próximo",
  pagination: "Paginação",
  search: "Buscar",
  searchBlog: "Buscar no blog",
  noPosts: "Nenhum artigo encontrado.",
  noMaterials: "Nenhum material encontrado.",
  blogTitle: "Conteúdos exclusivos",
  blogIntro: "Fique por dentro de conteúdos sobre tecnologia e tendências sobre transformação digital para empresas.",
  blogPageTitle: (n: number) => `Blog - Página ${n} - Vertigo`,
  share: "Compartilhe",
  shareOn: "Compartilhar no",
  latest: "Últimos artigos",
  sidebarNews: "Não perca os materiais, estudos de caso e inovações mais recentes da Vertigo.",
  carouselPrev: "Anterior",
  carouselNext: "Próximo",
  carousel: "carrossel",
  filterHint: "Filtre abaixo as opções.",
  category: "Categoria",
  materials: "Materiais",
  whatsappOpen: "Abrir formulário WhatsApp",
  whatsappHello: "Olá! Preencha os campos abaixo para iniciar a conversa no WhatsApp.",
  enableJs: "Ative o JavaScript para ver o formulário.",
  close: "Fechar",
};

export type Dict = typeof pt;

const en: Dict = {
  htmlLang: "en-US",
  ogLocale: "en_US",
  skip: "Skip to content",
  home: "home",
  cta: "Talk to a Consultant",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  mainMenu: "Main menu",
  langPt: "Português",
  langEn: "English",
  quickAccess: "Quick Access",
  whereWeAre: "Where We Are",
  newsletter: "Newsletter",
  copyright: (y: number) => `Copyright © ${y} Vertigo - All rights reserved.`,
  credits: "Developed by:",
  learnMore: "Learn more",
  prev: "Previous",
  next: "Next",
  pagination: "Pagination",
  search: "Search",
  searchBlog: "Search the blog",
  noPosts: "No articles found.",
  noMaterials: "No materials found.",
  blogTitle: "Exclusive content",
  blogIntro: "Stay up-to-date with content about technology and trends in digital transformation for businesses.",
  blogPageTitle: (n: number) => `Blog - Page ${n} - Vertigo`,
  share: "Share",
  shareOn: "Share on",
  latest: "Latest Articles",
  sidebarNews: "Don't miss out on the latest materials, case studies, and innovations from Vertigo.",
  carouselPrev: "Previous",
  carouselNext: "Next",
  carousel: "carousel",
  filterHint: "Filter the options below.",
  category: "Category",
  materials: "Materials",
  whatsappOpen: "Open WhatsApp form",
  whatsappHello: "Hello! Please fill in the fields below to start the conversation on WhatsApp.",
  enableJs: "Enable JavaScript to see the form.",
  close: "Close",
};

export const ui = (lang: Lang): Dict => (lang === "en" ? en : pt);

/** Escolhe o valor do idioma: tr(lang, { pt: "...", en: "..." }). */
export const tr = <T>(lang: Lang, v: { pt: T; en: T }): T => v[lang];
