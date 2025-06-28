import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diretor {

  @IsNotEmpty()
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: number;

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