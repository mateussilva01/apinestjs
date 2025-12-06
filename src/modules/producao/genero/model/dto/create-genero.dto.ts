import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGeneroDto {
  @IsOptional()
  status = CreateGeneroDtoStatus.ativo;

  @IsString()
  @IsNotEmpty()
  nome: string;
}

export enum CreateGeneroDtoStatus {
  ativo = 1,
  desativado = 2
}