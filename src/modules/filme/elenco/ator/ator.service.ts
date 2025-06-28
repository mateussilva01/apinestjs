import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAtorDto } from './model/dto/create-ator.dto';
import { UpdateAtorDto } from './model/dto/update-ator.dto';
import { Ator } from './model/ator.entity';

@Injectable()
export class AtorService {

  constructor(
    @InjectRepository(Ator)
    private atorRepository: Repository<Ator>  
  ) {}

  create(createAtorDto: CreateAtorDto) {
    console.log(createAtorDto);
    return this.atorRepository.save(createAtorDto);
  }

  findAll() {
    return this.atorRepository.find();
  }

  findOne(id: string) {
    return this.atorRepository.findOneBy({ id });
  }

  update(id: string, updateAtorDto: UpdateAtorDto) {
    return this.atorRepository.update(id, updateAtorDto);
  }

  remove(id: string) {
    return this.atorRepository.delete(id);
  }

}
