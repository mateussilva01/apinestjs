import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Length(3, 32)
  nome: string;

  @IsString()
  @Length(6, 255)
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 255)
  senha: string;
}