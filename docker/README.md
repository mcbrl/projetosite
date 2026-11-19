# Docker (desenvolvimento)

Docker aqui é só para desenvolvimento. Produção ainda não está definida.

```bash
docker compose up -d dev                       # astro dev com hot reload -> http://localhost:4322
docker compose logs -f dev
docker compose --profile preview up -d --build preview   # build de produção + nginx -> http://localhost:8081
docker compose run --rm tools python tools/extract_home.py   # scripts Python (dump / extração)
docker compose down                            # para tudo (volumes ficam; -v apaga)
```

Portas configuráveis por `.env` ou variável: `DEV_PORT` (4322), `PREVIEW_PORT` (8081).
A 4321 fica livre para o `npm run dev` do host.

## dev

- O código é montado do host, e as edições recarregam a página.
- `node_modules` e `.astro/` ficam em **volumes do container**. O container usa binários Linux
  (esbuild, rollup) e não mexe no `node_modules` nem no lock `.astro/dev.json` do macOS, então
  `npm run dev` no host e o container podem rodar ao mesmo tempo.
- Quando o `package-lock.json` muda, o entrypoint roda `npm ci` sozinho ao subir o container.
- O bind mount do Docker Desktop não entrega eventos de arquivo, por isso o watcher usa polling
  (`CHOKIDAR_USEPOLLING`). Isso custa ~15% de CPU com o container ocioso. `DEV_POLLING=0`
  desliga o polling e zera a CPU, mas aí o hot reload para de funcionar.
  `dist/`, `.venv/`, `raw-html/` e `tools/.cache/` ficam ocultos no container para o polling
  não varrê-los.

## preview

`docker/Dockerfile` (alvo `preview`) roda `npm run build` e `check:routes`. O build **falha** se
faltar alguma URL de `data/url-map.json`. Depois serve o `dist/` com nginx (`docker/nginx.conf`):

- gzip e `Cache-Control: immutable` em `/_astro/`; `/healthz` para o healthcheck.
- As URLs que só existem no WordPress reproduzem o comportamento atual do site (as-is):

| URL | vertigo.com.br hoje | preview |
|---|---|---|
| `/?p=ID`, `/?page_id=ID` | 301 → URL do conteúdo | 301 (map gerado de `url-map.json` por `docker/wp-ids.mjs`) |
| `/feed/`, `/…/feed/`, `/author/…` | 301 → `/` | igual |
| `/wp-admin/` | 302 → `/404/` | igual |
| `/wp-login.php` | 403 | igual |
| `/slug` sem barra | 200 | 200 |
| `/category/…`, `/tag/…` | 200 (arquivo do WP) | **404**: o tema ainda não gera essas páginas |
| `/wp-json/`, `/sitemap_index.xml`, `/robots.txt` | 200 | 404 |

O `.dockerignore` deixa fora da imagem `raw-html/` e `public/wp-content/{plugins,cache,themes}`,
que nenhuma página referencia.

## tools

Python 3.14 com as dependências de `docker/requirements.txt` (as mesmas versões do `.venv`).
O repositório é montado, então os scripts escrevem direto em `src/content`, `public`, `data`, etc.
