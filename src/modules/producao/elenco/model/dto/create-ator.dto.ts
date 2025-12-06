import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAtorDto {
  @IsOptional()
  status = CreateAtorDtoStatus.ativo;

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

export enum CreateAtorDtoStatus {
  ativo = 1,
  desativado = 2
}