// Gera o map do nginx para os links curtos do WordPress (/?p=ID -> URL do post/página).
import { readFileSync } from "node:fs";

const map = JSON.parse(readFileSync("data/url-map.json", "utf8"));
for (const { wpId, path } of map) console.log(`"${wpId}" "${path}";`);
