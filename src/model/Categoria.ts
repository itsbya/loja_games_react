import type Categoria from "./Categoria";

export default interface Categoria{
  id: number;
  tipo: string;
  produto?: Produto[] | null;
}