import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { BancoProvider } from 'src/database/banco.provider';
import { CreateGeneroDto } from './model/dto/create-genero.dto';
import { UpdateGeneroDto } from './model/dto/update-genero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Genero } from './model/genero.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>
  ) {}

  private limparCampos(genero: Genero, ignorar: string | undefined) {
    const camposParaIgnora = ignorar ? ignorar.split(',') : [];
    const copia = { ...genero };
    camposParaIgnora.forEach((campo: string) => {
      delete copia[campo as keyof Genero];
    })
    return copia;
  }

  create(createGeneroDto: CreateGeneroDto) {
    return this.generoRepository.save(createGeneroDto);
  }

  findAll() {
    return this.generoRepository.find();
  }

  findOne(id: string) {
    return this.generoRepository.findOneBy({ id });
  }

  update(id: string, updateGeneroDto: UpdateGeneroDto) {
    return this.generoRepository.update(id, updateGeneroDto);
  }

  remove(id: string) {
    return this.generoRepository.delete(id);
  }

}
