import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diretor } from './model/diretor.entity';
import { CreateDiretorDto } from './model/dto/create-diretor.dto';
import { UpdateDiretorDto } from './model/dto/update-diretor.dto';

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
    return this.diretorRepository.find();
  }

  findOne(id: string) {
    return this.diretorRepository.findOneBy({ id });
  }
  
  update(id: string, updateDiretorDto: UpdateDiretorDto) {
    return this.diretorRepository.update(id, updateDiretorDto);
  }

  remove(id: string) {
    return this.diretorRepository.delete(id);
  }

}
