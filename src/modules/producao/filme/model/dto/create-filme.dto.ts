import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Diretor } from 'src/modules/producao/diretor/model/diretor.entity';
import { Ator } from 'src/modules/producao/elenco/model/ator.entity';
import { Genero } from 'src/modules/producao/genero/model/genero.entity';
import { JoinColumn } from 'typeorm';

export class CreateFilmeDto {
  @IsOptional()
  status = CreateFilmeDtoStatus.ativo;

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsNotEmpty()
  ano: Date;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Diretor)
  @JoinColumn({ name: 'diretorid' })
  diretor: Diretor;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Genero)
  generos: Genero[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Ator)
  atores: Ator[];

  @IsString()
  @IsNotEmpty()
  sinopse: string;
}

export enum CreateFilmeDtoStatus {
  ativo = 1,
  desativado = 2
}