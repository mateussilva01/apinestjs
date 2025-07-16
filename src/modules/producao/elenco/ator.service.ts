import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.atorRepository.save(createAtorDto);
  }

  async findAll() {
    return await this.atorRepository
    .createQueryBuilder('ator')
    .select(['ator.id', 'ator.nome', 'ator.nascimento', 'ator.nacionalidade', 'ator.papel'])
    .orderBy('ator.updatedAt', 'DESC')
    .addOrderBy('ator.createdAt', 'DESC')
    .getMany()
  }

  findOne(id: string) {
    const ator = this.atorRepository.findOneBy({ id });
    if (!ator)
      throw new NotFoundException(`Ator com id ${id} não encontrado`);
    return ator;
  }

  update(id: string, updateAtorDto: UpdateAtorDto) {
    return this.atorRepository.update(id, updateAtorDto);
  }

  async remove(id: string) {
    const ator = await this.atorRepository.findOneBy({ id });
    if (!ator)
      throw new NotFoundException(`Ator com id ${id} não encontrado`);
    return this.atorRepository.softRemove(ator); 
  }

}
