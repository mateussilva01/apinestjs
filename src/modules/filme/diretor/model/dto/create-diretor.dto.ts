import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDiretorDto {
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