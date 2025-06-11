import { Ator, Diretor, Genero } from "src/model";

export class CreateFilmeDto {
  titulo: string;
  ano: number;
  genero: Genero[];
  diretor: Diretor;
  elenco: Ator[];
  sinopse: string;
}
