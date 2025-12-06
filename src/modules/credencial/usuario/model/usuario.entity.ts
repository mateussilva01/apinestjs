import { IsNotEmpty } from 'class-validator';
import { EntidadeBase } from 'src/common/entidade_base/entidade-base';
import { Column, Entity } from 'typeorm';

@Entity('credencial.usuario')
export class Usuario extends EntidadeBase {
  @IsNotEmpty()
  @Column()
  nome: string;

  @IsNotEmpty()
  @Column()
  email: string;

  @IsNotEmpty()
  @Column()
  senha: string;
}