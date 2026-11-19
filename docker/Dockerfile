# Infra de desenvolvimento do site (não é imagem de produção).
# Alvos: dev (astro dev com hot reload), preview (build estático servido por nginx).

FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund \
 && sha256sum package-lock.json | cut -d' ' -f1 > node_modules/.lock-hash

FROM deps AS dev
COPY docker/dev-entrypoint.sh /usr/local/bin/dev-entrypoint
ENTRYPOINT ["dev-entrypoint"]
CMD ["node_modules/.bin/astro", "dev", "--host", "0.0.0.0", "--port", "4321"]

FROM deps AS build
COPY . .
RUN npm run build \
 && npm run check:routes \
 && node docker/wp-ids.mjs > /tmp/wp-ids.map

FROM nginx:1.29-alpine AS preview
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /tmp/wp-ids.map /etc/nginx/wp-ids.map
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=10s --timeout=3s CMD wget -qO- http://127.0.0.1:8080/healthz || exit 1
