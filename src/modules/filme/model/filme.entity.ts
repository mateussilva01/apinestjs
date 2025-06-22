import { Ator, Diretor, Genero } from 'src/model';

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