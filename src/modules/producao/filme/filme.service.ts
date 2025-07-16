import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmeDto } from './model/dto/create-filme.dto';
import { UpdateFilmeDto } from './model/dto/update-filme.dto';
import { Filme, FilmeAtor, FilmeGenero } from './model/filme.entity';

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
          throw new BadRequestException('id do gênero é obrigatório');
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
          throw new BadRequestException('id do ator é obrigatório');
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
    return this.filmeRepository.find({
      select: {
        id: true,
        titulo: true,
        ano: true,
        sinopse: true
      }, 
      order: {
        updatedAt: 'DESC',
        createdAt: 'DESC'
      }
    })
  }

  async findOne(id: string) {
    /* return this.filmeRepository.findOneOrFail({
      where: { id },
      relations: ['generos', 'generos.genero', 'atores', 'atores.ator'],
    }); */
    const filme = await this.filmeRepository
    .createQueryBuilder('filme')
    .leftJoinAndSelect('filme.diretor', 'diretor')
    .leftJoinAndSelect('filme.generos', 'generos')
    .leftJoinAndSelect('generos.genero', 'genero')
    .leftJoinAndSelect('filme.atores', 'atores')
    .leftJoinAndSelect('atores.ator', 'ator')
    .where('filme.id = :id', { id })
    .getOne();
    if (!filme) {
      throw new NotFoundException(`Filme com id ${id} não encontrado`);
    }
    return filme;
  }

  update(id: string, updateFilmeDto: UpdateFilmeDto) {
    return this.filmeRepository.update(id, updateFilmeDto);
  }

  async remove(id: string) {
    const filme = await this.filmeRepository.findOneBy({ id });
    if (!filme)
      throw new NotFoundException(`Filme com id ${id} não encontrado`);
    return this.filmeRepository.softRemove(filme);
  }

}
