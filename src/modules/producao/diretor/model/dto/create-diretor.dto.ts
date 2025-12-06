import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateDiretorDto {
  @IsOptional()
  status = CreateDiretorDtoStatus.ativo;

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

export enum CreateDiretorDtoStatus {
  ativo = 1,
  desativado = 2
}