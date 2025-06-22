import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { BancoProvider } from 'src/database/banco.provider';
import { Ator } from 'src/model';
import { CreateAtorDto } from './model/dto/create-ator.dto';
import { UpdateAtorDto } from './model/dto/update-ator.dto';

@Injectable()
export class AtorService {
  constructor(private banco: BancoProvider) {}

  private limparCampos(ator: Ator, ignorar: string | undefined) {
    const camposParaIgnora = ignorar ? ignorar.split(',') : [];
    const copia = { ...ator };
    camposParaIgnora.forEach((campo: string) => {
      delete copia[campo as keyof Ator];
    })
    return copia;
  }

  create(createAtorDto: CreateAtorDto, emailUsuario: string) {
    if (!createAtorDto.nome) {
      throw new BadRequestException('Informações inválidas')
    }
    const idAleatorio = (Math.random() * 100) | 0;
    const ator = { ...createAtorDto, id: `ATR${idAleatorio}`, criadoPor: emailUsuario};
    console.log(ator);
    this.banco.atores.push(ator);
    return ator;
  }

  findAll(ignorar: string) {
    return this.banco.atores.map((ator: Ator) => {
      return this.limparCampos(ator, ignorar);
    });
  }

  findOne(id: string, ignorar: string) {
    const ator = this.banco.atores.find((ator: Ator) => ator.id === id);
    if (!ator) {
      throw new NotFoundException('Não encontrado');
    }
    return this.limparCampos(ator, ignorar);
  }

  update(id: string, updateAtorDto: UpdateAtorDto, usuario: string) {
    const indice = this.banco.atores.findIndex((ator: Ator) => ator.id === id);
    if (indice === -1) {
      throw new NotFoundException('Ator não foi encontrado');
    }
    if (usuario !== this.banco.atores[indice].criadoPor) {
      throw new ForbiddenException();
    }
    const atorAtualizado = { ...this.banco.atores[indice], updateAtorDto };
    this.banco.atores[indice] = atorAtualizado;
    return atorAtualizado;
  }

  remove(id: string, usuario: string) {
    const indice = this.banco.atores.findIndex((ator: Ator) => ator.id === id);
    if (indice === -1) {
      throw new NotFoundException(`Ator com id '${id}' não foi encontrado`);
    }
    if (usuario !== this.banco.atores[indice].criadoPor) {
      throw new ForbiddenException();
    }
    const atorRemovido = this.banco.atores.splice(indice, 1);
    return atorRemovido;
  }
}
