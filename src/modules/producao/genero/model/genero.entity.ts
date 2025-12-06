import { IsNotEmpty } from 'class-validator';
import { EntidadeBase } from 'src/common/entidade_base/entidade-base';
import { Column, Entity } from 'typeorm';

@Entity('producao.genero')
export class Genero extends EntidadeBase {
  @IsNotEmpty()
  @Column()
  nome: string;
}