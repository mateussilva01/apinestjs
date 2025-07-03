import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Diretor } from '../../diretor/model/diretor.entity';
import { Ator } from '../../elenco/ator/model/ator.entity';
import { Genero } from '../../genero/model/genero.entity';

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;
  
  @IsNotEmpty()
  ano: Date;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => Diretor)
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