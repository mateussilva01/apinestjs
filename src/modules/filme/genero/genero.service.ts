import { Injectable } from '@nestjs/common';
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
