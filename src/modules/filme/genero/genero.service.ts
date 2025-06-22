import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { BancoProvider } from 'src/database/banco.provider';
import { Genero } from 'src/model';
import { CreateGeneroDto } from './model/dto/create-genero.dto';
import { UpdateGeneroDto } from './model/dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(private banco: BancoProvider) {}

  private limparCampos(genero: Genero, ignorar: string | undefined) {
    const camposParaIgnora = ignorar ? ignorar.split(',') : [];
    const copia = { ...genero };
    camposParaIgnora.forEach((campo: string) => {
      delete copia[campo as keyof Genero];
    })
    return copia;
  }

  create(createGeneroDto: CreateGeneroDto, emailUsuario: string) {
    if (!createGeneroDto.nome) {
      throw new BadRequestException('Informações inválidas')
    }
    const idAleatorio = (Math.random() * 100) | 0;
    const genero = { ...createGeneroDto, id: `GEN${idAleatorio}`, criadoPor: emailUsuario};
    console.log(genero);
    this.banco.generos.push(genero);
    return genero;
  }

  findAll(ignorar: string) {
    return this.banco.generos.map((genero: Genero) => {
      return this.limparCampos(genero, ignorar);
    });
  }

  findOne(id: string, ignorar: string) {
    const genero = this.banco.generos.find((genero: Genero) => genero.id === id);
    if (!genero) {
      throw new NotFoundException('Não encontrado');
    }
    return this.limparCampos(genero, ignorar);
  }

  update(id: string, updateGeneroDto: UpdateGeneroDto, usuario: string) {
    const indice = this.banco.generos.findIndex((genero: Genero) => genero.id === id);
    if (indice === -1) {
      throw new NotFoundException('Gênero não foi encontrado');
    }
    if (usuario !== this.banco.generos[indice].criadoPor) {
      throw new ForbiddenException();
    }
    const generoAtualizado = { ...this.banco.generos[indice], updateGeneroDto };
    this.banco.generos[indice] = generoAtualizado;
    return generoAtualizado;
  }

  remove(id: string, usuario: string) {
    const indice = this.banco.generos.findIndex((genero: Genero) => genero.id === id);
    if (indice === -1) {
      throw new NotFoundException(`Gênero com id '${id}' não foi encontrado`);
    }
    if (usuario !== this.banco.generos[indice].criadoPor) {
      throw new ForbiddenException();
    }
    const generoRemovido = this.banco.generos.splice(indice, 1);
    return generoRemovido;
  }
}
