// Configuração global do tema (espelha header/footer do Elementor).
export const site = {
  name: "Vertigo",
  tagline: "Digital Intelligence For Business",
  url: "https://vertigo.com.br",
  gtm: "GTM-M7B49TS",
  logo: {
    light: "/theme/img/vertigo-logo-tagline.png",
    dark: "/wp-content/uploads/2025/11/Vertigo_Version_Color_Dark_Backgrounds-scaled.png",
  },
  address: "Rua Visconde de Inhaúma, nº 134, Sala 2001, Parte. Centro, Rio de Janeiro-RJ - CEP 20.091-901",
  social: [
    { name: "Instagram", href: "https://www.instagram.com/vertigo.tech", icon: "instagram" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/vertigotech/", icon: "linkedin" },
    { name: "Facebook", href: "https://www.facebook.com/vertigo.tech", icon: "facebook" },
    { name: "YouTube", href: "https://www.youtube.com/user/brvertigo", icon: "youtube" },
  ],
  cta: { label: "Converse com um Consultor", href: "/contato/" },
  credits: { label: "Desenvolvido por:", href: "https://mov4.com.br/?utm_source=site-vertigo", logo: "/wp-content/uploads/2025/11/Logo-Mov4-Preto-2-copiar-scaled.webp" },
} as const;

// HubSpot (portal único, formulários PT)
export const hubspot = {
  portalId: "48576194",
  region: "na1",
  forms: {
    newsletter: "768dedaa-5f81-4132-b47c-02d5ecdd5714", // rodapé e sidebar dos posts
    contato: "2a8fba74-efe6-4f77-a262-9363161fb257",
    solucao: "b0b4484a-d610-41de-a886-4f18b3d57d3b", // páginas de tier
    whatsapp: "2eecb970-17c0-4918-8d57-eb3552c49c56",
  },
} as const;


import { href, type Lang } from "../lib/i18n";

export type NavItem = { label: string; href: string; children?: { label: string; items: { label: string; href: string }[] }[] };

/** Menu principal no idioma (rótulos do header do Elementor / GTranslate). */
export function mainNav(lang: Lang): NavItem[] {
  const en = lang === "en";
  const h = (p: string) => href(lang, p);
  return [
    { label: "Home", href: h("/") },
    { label: "AI Journey", href: h("/ai-journey/") },
    {
      label: en ? "Our Solutions" : "Nossas Soluções",
      href: h("/solucoes/"),
      children: [
        {
          label: "Strategy Tier",
          items: [
            { label: "Technology Strategy", href: h("/strategy-tier-technology-strategy/") },
            { label: "AI Strategy & Operations", href: h("/strategy-tier-ai-strategy-operations/") },
            { label: "Go to Cloud", href: h("/strategy-tier-go-to-cloud/") },
          ],
        },
        {
          label: "Business Tier",
          items: [
            { label: en ? "Financial Services & Insurance Companies" : "Serviços Financeiros & Seguradoras", href: h("/business-tier-servicos-financeiros-seguradoras/") },
            { label: en ? "Government & Public Sector" : "Governo & Judiciário", href: h("/business-tier-governo-judiciario/") },
            { label: "Business Digital Acceleration", href: h("/business-tier-business-digital-acceleration/") },
          ],
        },
        {
          label: "Tech Tier",
          items: [
            { label: "Platform Engineering", href: h("/tech-tier-platform-engineering/") },
            { label: "Data, Intelligence & AI", href: h("/tech-tier-data-intelligence-ai/") },
            { label: "API & Integration", href: h("/tech-tier-api-integration/") },
          ],
        },
      ],
    },
    { label: en ? "Partners" : "Parceiros", href: h("/parceiros/") },
    { label: en ? "Careers" : "Carreiras", href: h("/carreiras/") },
    { label: en ? "Materials" : "Materiais", href: h("/materiais/") },
    { label: "Blog", href: h("/blog/") },
  ];
}

export function footerNav(lang: Lang) {
  const en = lang === "en";
  const h = (p: string) => href(lang, p);
  return [
    { label: "Home", href: h("/") },
    { label: en ? "Solutions" : "Soluções", href: h("/solucoes/") },
    { label: en ? "Materials" : "Materiais", href: h("/materiais/") },
    { label: "Blog", href: h("/blog/") },
    { label: en ? "Careers" : "Carreiras", href: h("/carreiras/") },
    { label: en ? "Contact" : "Contato", href: h("/contato/") },
    { label: en ? "Ombudsman Office" : "Ouvidoria", href: h("/ouvidoria/") },
    { label: en ? "Allegations" : "Denúncias", href: h("/canal-de-denuncias/") },
    { label: en ? "Privacy Policy" : "Política de Privacidade", href: h("/politica-de-privacidade/") },
  ];
}
