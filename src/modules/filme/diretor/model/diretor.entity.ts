import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diretor {

  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

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