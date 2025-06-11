import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { BancoProvider } from 'src/banco/banco.provider';
import { Filme } from 'src/model';

@Injectable()
export class FilmesService {
  constructor(private banco: BancoProvider) {}

  private limparCampos(filme: Filme, ignorar: string | undefined) {
    const camposParaIgnora = ignorar ? ignorar.split(',') : [];
    const copia = { ...filme };
    camposParaIgnora.forEach((campo: string) => {
      delete copia[campo as keyof Filme];
    })
    return copia;
  }

  create(createFilmeDto: CreateFilmeDto) {
    if (!(
      createFilmeDto.ano && createFilmeDto.diretor &&
      createFilmeDto.elenco && createFilmeDto.genero &&
      createFilmeDto.sinopse && createFilmeDto.titulo
    )) {
      throw new BadRequestException('Informações inválidas')
    }
    const idAleatorio = (Math.random() * 100) | 0;
    const filme = { ...createFilmeDto, id: `FIL${idAleatorio}`};
    this.banco.filmes.push(filme);
    return filme;
  }

  findAll(ignorar: string) {
    return this.banco.filmes.map((filme: Filme) => {
      return this.limparCampos(filme, ignorar);
    });
  }

  findOne(id: string, ignorar: string) {
    const filme = this.banco.filmes.find((filme: Filme) => filme.id === id);
    if (!filme) {
      throw new NotFoundException('Não encontrado');
      //throw new NotFoundException();
      //throw new HttpException('Não encontrado', HttpStatus.NOT_FOUND);
    }
    return this.limparCampos(filme, ignorar);
  }

  update(id: string, updateFilmeDto: UpdateFilmeDto) {
    const indice = this.banco.filmes.findIndex((filme: Filme) => filme.id === id);
    if (indice === -1) {
      throw new NotFoundException("Filme não foi encontrado");
    }
    const filmeAtualizado = { ...this.banco.filmes[indice], updateFilmeDto };
    this.banco.filmes[indice] = filmeAtualizado;
    return filmeAtualizado;
  }

  remove(id: string) {
    const indice = this.banco.filmes.findIndex((filme: Filme) => filme.id === id);
    if (indice === -1) {
      throw new NotFoundException("Filme não foi encontrado");
    }
    const filmeRemovido = this.banco.filmes.splice(indice, 1);
    return filmeRemovido;
  }
}
