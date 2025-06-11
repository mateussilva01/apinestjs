import { Injectable } from '@nestjs/common';
import { BancoProvider } from 'src/banco/banco.provider';
import { Ator, Filme, Genero } from 'src/model';

@Injectable()
export class InfoService {

  constructor(private banco: BancoProvider) {}

  pegarDiretores() {
    const dados = new Set(
      this.banco.filmes.map((filme: Filme) => {
        return JSON.stringify(filme.diretor);
      })
    )
    const arr = Array.from(dados).map(diretor => JSON.parse(diretor as string));
    return arr;
  }

  pegarAtores() {
    const dados = new Set(
      this.banco.filmes.flatMap((filme: Filme)=> {
        return filme.elenco.map((ator: Ator) => JSON.stringify(ator));
      })
    )
    const arr = Array.from(dados).map(ator => JSON.parse(ator as string));
    return arr;
  }

  pegarGeneros() {
    const dados = new Set(
      this.banco.filmes.flatMap((filme: Filme) => {
        return filme.genero.map((genero: Genero) => JSON.stringify(genero))
      })
    )
    const arr = Array.from(dados).map(genero => JSON.parse(genero as string));
    return arr;
  }

}
