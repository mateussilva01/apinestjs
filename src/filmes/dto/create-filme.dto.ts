import { Type } from "class-transformer";
import { IsArray, IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Ator, Diretor, Genero } from "src/model";

export class CreateFilmeDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;
  
  @IsInt()
  ano: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GeneroValidation)
  genero: Genero[];
  
  @ValidateNested()
  @Type(() => DiretorValidation)
  diretor: Diretor;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AtorValidation)
  elenco: Ator[];

  @IsString()
  @IsNotEmpty()
  sinopse: string;
}

class GeneroValidation {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;
}

class DiretorValidation {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  nascimento: string;

  @IsString()
  @IsNotEmpty()
  nacionalidade: string;
}

class AtorValidation {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  nascimento: string;

  @IsString()
  @IsNotEmpty()
  nacionalidade: string;

  @IsString()
  @IsNotEmpty()
  papel: string;
}