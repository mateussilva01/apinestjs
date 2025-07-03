import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './model/dto/create-filme.dto';
import { UpdateFilmeDto } from './model/dto/update-filme.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Filme, FilmeAtor, FilmeGenero } from './model/filme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FilmeService {
  constructor(
    @InjectRepository(Filme)
    private filmeRepository: Repository<Filme>,
    @InjectRepository(FilmeGenero)
    private filmeGeneroRepository: Repository<FilmeGenero>,
    @InjectRepository(FilmeAtor)
    private filmeAtorRepository: Repository<FilmeAtor>
  ) {}

  async create(createFilmeDto: CreateFilmeDto) {
    if (!createFilmeDto) {
      throw new BadRequestException('Informações inválidas')
    }
    const filme = await this.filmeRepository.save({
      titulo: createFilmeDto.titulo,
      ano: createFilmeDto.ano,
      sinopse: createFilmeDto.sinopse,
      diretor: { id: createFilmeDto.diretor.id }
    });
    if (createFilmeDto.generos?.length) {
      for (const genero of createFilmeDto.generos) {
        if (!genero?.id) {
          throw new BadRequestException('ID do gênero é obrigatório');
        }
        await this.filmeGeneroRepository.save({
          filme: { id: filme.id },
          genero: { id: genero.id }
        });
      }
    }
    if (createFilmeDto.atores?.length) {
      for (const ator of createFilmeDto.atores) {
        if (!ator?.id) {
          throw new BadRequestException('ID do ator é obrigatório');
        }
        await this.filmeAtorRepository.save({
          filme: { id: filme.id },
          ator: { id: ator.id }
        });
      }
    }
    return filme;
  }

  findAll() {
    return this.filmeRepository.find()
  }

  findOne(id: string) {
    return this.filmeRepository.findOneBy({ id });
  }

  update(id: string, updateFilmeDto: UpdateFilmeDto) {
    return this.filmeRepository.update(id, updateFilmeDto);
  }

  remove(id: string) {
    return this.filmeRepository.delete(id);
  }

}
