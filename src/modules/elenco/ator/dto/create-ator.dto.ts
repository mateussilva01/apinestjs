import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAtorDto {
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