import { IsNotEmpty } from 'class-validator';
import { EntidadeBase } from 'src/common/entidade_base/entidade-base';
import { Column, Entity } from 'typeorm';

@Entity('producao.diretor')
export class Diretor extends EntidadeBase {
  @IsNotEmpty()
  @Column()
  nome: string;

  @IsNotEmpty()
  @Column()
  nascimento: string;

  @IsNotEmpty()
  @Column()
  nacionalidade: string;
}