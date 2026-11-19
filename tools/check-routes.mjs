// Verifica se toda URL do WordPress (data/url-map.json) existe em dist/.
import { existsSync, readFileSync } from "node:fs";

const map = JSON.parse(readFileSync("data/url-map.json", "utf8"));
const missing = map.filter(({ path }) => {
  const p = decodeURI(path).replace(/^\//, "");
  return !existsSync(`dist/${p}index.html`);
});
console.log(`${map.length - missing.length}/${map.length} URLs do WordPress presentes em dist/`);
for (const m of missing) console.log(`  FALTANDO ${m.type.padEnd(6)} ${m.path}`);
process.exit(missing.length ? 1 : 0);
