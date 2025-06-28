import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}