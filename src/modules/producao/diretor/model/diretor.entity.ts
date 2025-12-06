import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('producao.diretor')
export class Diretor {
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
  @Column()
  nascimento: string;

  @IsNotEmpty()
  @Column()
  nacionalidade: string;
}