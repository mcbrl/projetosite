import { blogSearch } from "../../lib/paths";

// Índice estático para a busca do blog (carregado sob demanda).
export const GET = () => blogSearch("pt");