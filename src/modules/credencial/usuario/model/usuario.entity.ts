import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('credencial.usuario')
export class Usuario {
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
  email: string;

  @IsNotEmpty()
  @Column()
  senha: string;
}