# site-vertigo — tema Astro

Migração de vertigo.com.br (WordPress + Elementor) para [Astro](https://astro.build) 7.
O conteúdo vem do dump em Markdown (`scripts/clone_site.py`); este README cobre o **tema**.

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # gera dist/
npm run check:routes   # confere que toda URL de data/url-map.json existe em dist/
npm run extract        # regenera src/data/home.json e pages.json a partir de raw-html/
```

## Quem escreve onde

| Caminho | Dono |
|---|---|
| `src/content/**`, `public/wp-content/**`, `raw-html/`, `data/`, `scripts/` | dump (`clone_site.py`) |
| `src/pages`, `src/layouts`, `src/components`, `src/styles`, `src/lib`, `src/data`, `public/theme/`, `tools/` | tema |

O tema só lê o que o dump produz, então os dois podem evoluir em paralelo.

## Rotas (URLs idênticas ao WordPress)

- As rotas saem de `originalUrl` no frontmatter, não do nome do arquivo (`src/lib/routes.ts`).
  O glob loader usaria o `slug` do frontmatter como id (`index.md` viraria `home`), por isso
  `src/content.config.ts` define `generateId` pelo nome do arquivo.
- `src/pages/[...slug].astro` atende páginas e posts, que ficam na raiz (`/a-mulher-na-ti/`), e falha
  o build se dois conteúdos caírem no mesmo caminho.
- Páginas com template próprio (`CUSTOM_ROUTES`): `/`, `/blog/`, `/materiais/`, `/solucoes/`, `/contato/`, `/carreiras/`, `/ai-journey/`, `/parceiros/`.
- `/blog/page/N/` para a paginação (no WP era AJAX, sem URL) e `/cases/<slug>/`.
- Arquivos de taxonomia: `/category/<slug>/` e `/tag/<slug>/` (com `/page/N/`), gerados de `data/categories.json` e `data/tags.json` só para termos com posts publicados (`src/lib/taxonomy.ts`).
- `trailingSlash: "always"`.

## Inglês (/en/)

- Toda página existe também em `/en/` + o mesmo caminho (ex.: `/en/solucoes/`, `/en/a-mulher-na-ti/`).
  As bandeiras no header (`public/theme/flags/`) levam ao mesmo caminho no outro idioma; o `<head>` tem `hreflang`.
- O idioma sai da URL (`src/lib/i18n.ts`: `langOf`, `href`, `ui`). Textos fixos do tema ficam em `ui()`/nos
  componentes; os da home em `src/lib/home.ts`; os dos materiais em `src/data/materiais-en.json`.
- O conteúdo (páginas, posts, cases) em inglês fica em `src/content/en/`, copiado do GTranslate de
  en.vertigo.com.br por `node tools/fetch_en.mjs` (`--force` refaz; aceita `pages`, `blog`, `cases`).
- As rotas em `src/pages/en/` reaproveitam os templates em português; `src/lib/paths.ts` tem os
  `getStaticPaths` por idioma.
- Os formulários HubSpot continuam em português (são os mesmos formulários do original).

## Layouts

| Layout | Uso |
|---|---|
| `BaseLayout` | head/SEO (Yoast → `seo` do frontmatter), GTM `GTM-M7B49TS` (só em produção), header, footer, WhatsApp |
| `PageLayout` | hero (imagem + chip + título) e Markdown. Se a página tiver formulário HubSpot, divide a tela com o painel escuro do formulário (páginas de Tier) |
| `PostLayout` | hero com a imagem destacada, categorias e data; corpo, compartilhamento, sidebar (newsletter + últimos artigos) |

O plugin `src/lib/remark-hero.mjs` tira do corpo o `###### EYEBROW` e o `# Título` iniciais (que no
Elementor ficavam no hero) e um `# ...` final (título do formulário), expondo esses textos como
`remarkPluginFrontmatter`.

## Dados extraídos do Elementor

O Markdown perde tabs, carrosséis, contadores e imagens de fundo definidas no CSS. Por isso:

- `tools/extract_home.py` → `src/data/home.json`: toda a home (hero, números, tiers, logos,
  depoimentos, AI Journey, VeeCode, diferenciais, carreiras).
- `tools/extract_pages.py` → `src/data/pages.json`: imagem do hero e ID do formulário HubSpot de cada
  página. As imagens de fundo vêm do CSS gerado pelo Elementor, que o dump **não** espelha; o script
  as baixa para `public/theme/bg/`.

## Materiais

`/materiais/` e o carrossel da home usam `src/lib/materiais.ts`: os 10 cases publicados depois do dump
(`src/data/materiais-novos.json`, imagens servidas direto de vertigo.com.br) + a coleção `cases`.
A página filtra por busca/categoria (checkbox) e pagina 6 por vez, como o JetEngine do original.

## Design tokens

Em `src/styles/global.css`, copiados do Elementor Kit (post-48): azul `#076CFE`, navy `#0C1557`,
ink `#101820` nas seções escuras, cinza `#E0E0E0`, fonte **Google Sans** (woff2 em `public/theme/fonts/`).

Os tamanhos de fonte seguem a escala do Kit nos mesmos breakpoints do Elementor (≤1024px e ≤767px), como
variáveis `--fs-*` em `global.css` (ex.: `--fs-section` 45/56/36px, `--fs-display` 59/56/36px).

## Animações

Reproduzem os Motion Effects do original (`src/lib/motion.ts`, carregado no `BaseLayout`):

- Entrada: `data-anim="fadeInUp|fadeInRight|fadeInLeft"` + `data-delay` (ms), 1,25s ao entrar na tela.
  Em Markdown, `data-anim-children="seletor|animação|atraso;…"` aplica a filhos (páginas de Tier).
- Contador: `data-count-to="25"` sobe de 0 em 2s (números da home e do AI Journey).
- Carrosséis em loop infinito (`Carousel.astro`): logos (Clientes, Parceiros, Certificações) rolam sem parar
  (`marquee`, 5s por logo); depoimentos avançam um card a cada 5s (`loop autoplay`). Pausam no hover/toque.
- Flip box dos cards de materiais (`CaseCard`), botões "float" no hover e tremida do WhatsApp (10s).
- Sem JS ou com `prefers-reduced-motion`, o conteúdo aparece sem animação.

## Formulários (HubSpot, portal 48576194 / na1)

`<HubSpotForm formId=… dark square lazy />`, com IDs em `src/data/site.ts`: newsletter (rodapé e sidebar
dos posts), contato, solução (páginas de Tier) e WhatsApp. Os formulários carregam quando entram
na tela.

## Fora do escopo por enquanto

- Versão EN (gtranslate, bandeiras no header) e banner de cookies (CookieYes).
- Popup de inscrição do blog e filtros por categoria/tag (existe só a busca por texto).
- `/sobre/` está publicada no WP com lorem ipsum de um tema de exemplo ("Printa").
