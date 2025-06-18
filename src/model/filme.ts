import { Ator } from "./elenco";
import { Diretor } from "./diretor";
import { Genero } from "./genero";

export interface Filme {
  id: string;
  titulo: string;
  ano: number;
  genero: Genero[];
  diretor: Diretor;
  elenco: Ator[];
  sinopse: string;
  criadoPor?: string;
}