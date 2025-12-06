import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { FilmeAtor } from 'src/modules/producao/filme/model/filme.entity';
import { EntidadeBase } from 'src/common/entidade_base/entidade-base';

@Entity('producao.ator')
export class Ator extends EntidadeBase {
  @IsNotEmpty()
  @Column()
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'timestamptz' })
  nascimento: Date;

  @IsNotEmpty()
  @Column()
  nacionalidade: string;

  @IsNotEmpty()
  @Column()
  papel: string;

  @OneToMany(() => FilmeAtor, filmeAtor => filmeAtor.ator)
  filmes: FilmeAtor[];
}