import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiretorDto } from './dto/create-diretor.dto';
import { UpdateDiretorDto } from './dto/update-diretor.dto';
import { BancoProvider } from 'src/database/banco.provider';
import { Diretor } from 'src/model';

@Injectable()
export class DiretorService {
  constructor(private banco: BancoProvider) {}

  private limparCampos(diretor: Diretor, ignorar: string | undefined) {
    const camposParaIgnora = ignorar ? ignorar.split(',') : [];
    const copia = { ...diretor };
    camposParaIgnora.forEach((campo: string) => {
      delete copia[campo as keyof Diretor];
    })
    return copia;
  }

  create(createDiretorDto: CreateDiretorDto, emailUsuario: string) {
    if (!(createDiretorDto.nome && createDiretorDto.nascimento && createDiretorDto.nacionalidade)) {
      throw new BadRequestException('Informações inválidas')
    }
    const idAleatorio = (Math.random() * 100) | 0;
    const diretor = { ...createDiretorDto, id: `DIR${idAleatorio}`, criadoPor: emailUsuario};
    console.log(diretor);
    this.banco.diretores.push(diretor);
    return diretor;
  }

  findAll(ignorar: string) {
    return this.banco.diretores.map((diretor: Diretor) => {
      return this.limparCampos(diretor, ignorar);
    });
  }

  findOne(id: string, ignorar: string) {
    const diretor = this.banco.diretores.find((diretor: Diretor) => diretor.id === id);
    if (!diretor) {
      throw new NotFoundException('Não encontrado');
      //throw new NotFoundException();
      //throw new HttpException('Não encontrado', HttpStatus.NOT_FOUND);
    }
    return this.limparCampos(diretor, ignorar);
  }

  update(id: string, updateDiretorDto: UpdateDiretorDto, usuario: string) {
    const indice = this.banco.diretores.findIndex((diretor: Diretor) => diretor.id === id);
    if (indice === -1) {
      throw new NotFoundException('Diretor não foi encontrado');
    }
    if (usuario !== this.banco.diretores[indice].criadoPor) {
      throw new ForbiddenException();
    }
    const diretorAtualizado = { ...this.banco.diretores[indice], updateDiretorDto };
    this.banco.diretores[indice] = diretorAtualizado;
    return diretorAtualizado;
  }

  remove(id: string, usuario: string) {
    const indice = this.banco.diretores.findIndex((diretor: Diretor) => diretor.id === id);
    if (indice === -1) {
      throw new NotFoundException('Diretor não foi encontrado');
    }
    if (usuario !== this.banco.diretores[indice].criadoPor) {
      throw new ForbiddenException();
    }
    const diretorRemovido = this.banco.diretores.splice(indice, 1);
    return diretorRemovido;
  }
}
