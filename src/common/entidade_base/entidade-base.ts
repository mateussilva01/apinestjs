import { IsUUID, IsNotEmpty } from 'class-validator';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, Column } from 'typeorm';

// NOTA: Não usamos o decorador @Entity aqui, pois esta é apenas a classe base
export abstract class EntidadeBase {
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
}