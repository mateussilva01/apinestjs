import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGeneroDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}