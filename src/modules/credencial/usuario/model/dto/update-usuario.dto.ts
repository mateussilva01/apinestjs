import { IsEmail, IsOptional, Length } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class UpdateUsuarioDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsOptional()
  @Length(3, 32)
  nome: string;

  @IsOptional()
  @IsEmail()
  @Length(6, 255)
  email: string;

  @IsOptional()
  @Length(8, 255)
  senha: string;
}