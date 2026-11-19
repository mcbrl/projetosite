#!/bin/sh
# node_modules fica num volume do container (binários Linux, não os do macOS).
# Reinstala quando o package-lock.json do host mudar.
set -e
hash=$(sha256sum package-lock.json | cut -d' ' -f1)
if [ "$(cat node_modules/.lock-hash 2>/dev/null)" != "$hash" ]; then
  echo "package-lock.json mudou: reinstalando dependências…"
  npm ci --no-audit --no-fund
  echo "$hash" > node_modules/.lock-hash
fi
# lock do `astro dev` deixado por um container anterior (o .astro/ é um volume do container)
rm -f .astro/dev.json
exec "$@"
