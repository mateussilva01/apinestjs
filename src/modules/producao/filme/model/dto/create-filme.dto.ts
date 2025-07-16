import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Diretor } from 'src/modules/producao/diretor/model/diretor.entity';
import { Ator } from 'src/modules/producao/elenco/model/ator.entity';
import { Genero } from 'src/modules/producao/genero/model/genero.entity';

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