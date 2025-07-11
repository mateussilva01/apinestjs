import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDiretorDto } from './model/dto/create-diretor.dto';
import { UpdateDiretorDto } from './model/dto/update-diretor.dto';
import { Diretor } from './model/diretor.entity';

@Injectable()
export class DiretorService {
  constructor(
    @InjectRepository(Diretor)
    private readonly diretorRepository: Repository<Diretor>,
  ) {}

  create(createDiretorDto: CreateDiretorDto) {
    return this.diretorRepository.save(createDiretorDto);
  }

  findAll() {
    return this.diretorRepository.find({ 
      order: { 
        updatedAt: 'DESC',
        createdAt: 'DESC'
      } 
    });
  }

  async findOne(id: string) {
    const diretor = await this.diretorRepository.findOneBy({ id });
    if (!diretor)
      throw new NotFoundException(`Diretor com id ${id} não encontrado`)
    return diretor;
  }
  
  update(id: string, updateDiretorDto: UpdateDiretorDto) {
    return this.diretorRepository.update(id, updateDiretorDto);
  }

  async remove(id: string) {
    const diretor = await this.diretorRepository.findOneBy({ id });
    if (!diretor)
      throw new NotFoundException(`Diretor com id ${id} não encontrado`);
    this.diretorRepository.softRemove(diretor);
    return { message: `Diretor com id ${id} removido` }
  }

}
