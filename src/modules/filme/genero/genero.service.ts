import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGeneroDto } from './model/dto/create-genero.dto';
import { UpdateGeneroDto } from './model/dto/update-genero.dto';
import { Genero } from './model/genero.entity';

@Injectable()
export class GeneroService {

  constructor(
    @InjectRepository(Genero)
    private generoRepository: Repository<Genero>
  ) {}

  create(createGeneroDto: CreateGeneroDto) {
    return this.generoRepository.save(createGeneroDto);
  }

  async findAll() {
    return await this.generoRepository.find({
      select: ['id', 'nome', 'createdAt', 'updatedAt'],
      order: {
        updatedAt: 'DESC', 
        createdAt: 'DESC'
      }
    });
  }

  findOne(id: string) {
    return this.generoRepository.findOneBy({ id });
  }

  update(id: string, updateGeneroDto: UpdateGeneroDto) {
    return this.generoRepository.update(id, updateGeneroDto);
  }

  async remove(id: string) {
    const genero = await this.generoRepository.findOneBy({ id });
    if (!genero)
      throw new NotFoundException(`Gênero com id ${id} não encontrado`);
    return this.generoRepository.softRemove(genero) 
  }

}
