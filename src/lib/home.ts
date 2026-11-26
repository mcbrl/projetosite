// Dados da home por idioma. O portuguÃªs vem de src/data/home.json (extraÃ­do do Elementor);
// o inglÃªs reaproveita imagens/links e troca os textos pelos de en.vertigo.com.br.
import pt from "../data/home.json";
import { href, type Lang } from "./i18n";

type Home = typeof pt;

const enText = {
  heroSubtitle: "Over 25 years of Digital Intelligence to accelerate business transformation.",
  cta: "Talk to a Consultant",
  headline: ["Intelligent.", "Agile.", "Digital."],
  introHtml:
    "<p>We are a <b>technology consulting firm</b> that integrates strategy, data, cloud, and artificial intelligence to accelerate business results.</p><p><b>For over 25 years</b>, we have supported executives who need to move their organizations forward without losing control, applying <b>digital intelligence</b> to help their businesses gain speed, modernize operations, and make better decisions in increasingly complex environments.</p><p>With methodology, analysis, and execution capabilities, <b>we help transform technological challenges into a competitive advantage</b>, with pace, security, and clarity throughout the entire journey.</p>",
  stats: ["Years on the market", "Employees", "Clients", "Projects delivered"],
  especialistas: [
    "Technology and AI Strategy",
    "Modernization and Journey to the Cloud",
    "Digital Business Acceleration",
    "Solutions for Regulated Sectors",
    "Platform Engineering",
    "Data, Integration, and Artificial Intelligence",
  ],
  tiers: [
    {
      description: "Solutions that guide strategic decisions in technology, AI, and cloud computing. We help companies define direction, reduce risks, and align investments with what truly drives the business.",
      columns: [
        { title: "Technology Strategy", items: ["Architecture & Infrastructure: Strategic Diagnosis", "Modernization Plan (Tech Radar + Cloud Fit)", "Technological Evolution Roadmap", "Technology Business Case"] },
        { title: "AI Strategy & Operations", items: ["AI Strategy and Governance", "Platform and Observability Strategy", "AI-driven technology evolution roadmap", "Intelligent Operations Guidelines (AIOps and automation)"] },
        { title: "Go to Cloud", items: ["Cloud Readiness Assessment", "Cloud Migration Strategy", "Cloud-Aligned Architecture & Governance", "Cloud Security", "Assisted Operation with FinOps"] },
      ],
    },
    {
      description: "Solutions that accelerate business, modernize operations, and support sectors that need efficiency, compliance, and integrated digital experiences.",
      columns: [
        { title: "Financial Services & Insurance Companies", items: ["Self-Service Portal", "Digital Investor Area", "White Label AI Insurance Platform", "Sales Force Automation", "Personalized Sales with AI", "Service with AI + RAG", "Enabled for Open Finance and BaaS", "Fraud Detection & Anti-Money Laundering", "Smart Recommendations (Next Best Action)", "FinOps-Driven Platformization"] },
        { title: "Government & Public Sector", items: ["Citizen Portal", "Transparency Portal (Open Data)", "Digital Official Gazette", "Citizen Experience in the Judiciary", "Digital Modernization of the Public Sector", "Legal Search AI in Natural Language"] },
        { title: "Business Digital Acceleration", items: ["Digital Workplace", "Digital Campaign Hub", "Automated Processes with AI", "Agile Onboarding Platform", "Business-Oriented Observability", "Digital Experience Platform"] },
      ],
    },
    {
      description: "Solutions that structure the technological foundation that supports growth: internal platforms, data, AI, and secure and scalable integrations.",
      columns: [
        { title: "Platform Engineering", items: ["Internal Developer Platform (IDP)", "Developer Experience (DevPortal)", "Delivery Automation (CI/CD)", "Deployment Governance with GitOps", "Microservices Architecture and APIs", "Containerization in Kubernetes", "Self-contained Virtualization", "Modernization of Legacy Applications", "Service Oriented Architecture (SOA)", "Infrastructure as Code (IaC)", "Team Autonomy with Observability", "Pipeline Setup, Observability, and Security"] },
        { title: "Data, Intelligence & AI", items: ["Graph Database", "Data Engineering", "Strategic Data Visualization", "Machine Learning", "AI & Data Science", "Data Intelligence for Decision Making", "Predictive AI", "Private and On-premise LLM", "Automation of Analytics and Insights", "Liferay AI Assistant"] },
        { title: "API & Integration", items: ["API Management", "API Gateway", "Microservices Architecture", "APIOps", "API Discovery and Catalog", "iPaaS & Systems Integration", "Interoperability"] },
      ],
    },
  ],
  depoimentos: [
    { quote: "We are making progress in modernizing applications, transforming the entire infrastructure into containers, and ensuring a CI/CD pipeline from development to production. The main goal of this change is to have a lighter and more scalable infrastructure so that we can meet all our business needs more quickly and efficiently. It's a successful partnership, and we are very happy with the results so far.", role: "CIO of Spot Education" },
    { quote: "With the solution provided by Vertigo, we were finally able to showcase the millions of records that have been collected over these 10 years of working in partnership with more than 200 institutions. The platform solution was essential to demonstrate all the work that was being done.", role: "Support Coordinator of the National Research Network - RNP" },
  ],
  aiJourney: {
    subtitle: "Go beyond the hype. Implement, govern, and scale with method.",
    badge: "Registered with the Claude Partner Network",
    paragraphs: [
      "Get a free diagnosis and map your organization's AI maturity level. Identify key gaps and discover the most efficient paths to move forward safely.",
      "In just a few minutes, you'll leave with a clear vision of what already works, what needs improvement, and where to begin.",
    ],
  },
  veecode: {
    title: "Try VeeCode DevPortal now and transform your IT team's work.",
    text: "Our open-source solution offers transparency, flexibility, and ease of deployment. For dedicated support, we have customized options with SLAs, guaranteeing exceptional performance.",
    cta: "Get to know VeeCode",
  },
  diferenciais: [
    { title: "Experience applied to critical decisions", text: "Over 25 years of experience working on highly complex projects, supporting executives in decisions involving risk, scale, and real business impact." },
    { title: "Strategy, technology, and execution all in the same team", text: "We connect strategic vision, technological design, and delivery capacity to avoid disruptions between planning and execution." },
    { title: "Safe performance in complex and regulated environments", text: "Experience in contexts that demand governance, compliance, and operational stability, reducing risks throughout the transformation." },
    { title: "Technical and operational autonomy for the client", text: "We structure solutions and empower your team to develop autonomy in operations and decision-making capabilities." },
  ],
  carreiras: {
    title: "Come work with us",
    eyebrow: "Careers",
    heading: "Grow, make an impact, and build a career at the speed of transformation.",
    paragraphs: [
      "Boost your potential at Vertigo by participating in innovative projects that generate real impact.",
      "Develop future-proof skills, grow in a collaborative environment, and build a career aligned with the speed of digital transformation.",
    ],
  },
};

const en: Home = {
  ...pt,
  hero: { ...pt.hero, subtitle: enText.heroSubtitle, cta: { label: enText.cta, href: href("en", pt.hero.cta.href) } },
  intro: { headline: enText.headline, html: enText.introHtml },
  stats: pt.stats.map((s, i) => ({ ...s, label: enText.stats[i] ?? s.label })),
  especialistas: pt.especialistas.map((e, i) => ({ ...e, title: enText.especialistas[i] ?? e.title })),
  tiers: pt.tiers.map((t, i) => ({
    ...t,
    description: enText.tiers[i].description,
    columns: t.columns.map((c, j) => ({ ...c, ...enText.tiers[i].columns[j], href: href("en", c.href) })),
  })),
  depoimentos: pt.depoimentos.map((d, i) => ({ ...d, ...enText.depoimentos[i] })),
  aiJourney: { ...pt.aiJourney, ...enText.aiJourney, href: href("en", pt.aiJourney.href) },
  veecode: { ...pt.veecode, ...enText.veecode, href: pt.veecode.href.replace("/pt/", "/") },
  diferenciais: enText.diferenciais,
  carreiras: { ...pt.carreiras, ...enText.carreiras, href: href("en", pt.carreiras.href) },
};

export const homeOf = (lang: Lang): Home => (lang === "en" ? en : pt);
