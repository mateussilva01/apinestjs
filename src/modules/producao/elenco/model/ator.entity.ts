import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FilmeAtor } from 'src/modules/producao/filme/model/filme.entity';

@Entity('producao.ator')
export class Ator {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  insercao?: Date;

  @UpdateDateColumn()
  atualizacao?: Date;

  @DeleteDateColumn()
  remocao?: Date;

  @IsNotEmpty()
  @Column()
  status: number;

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