import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { FilmeAtor } from 'src/modules/producao/filme/model/filme.entity';

@Entity()
export class Ator {

  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
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

  @CreateDateColumn()
  createdAt?: Date;
  
  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}