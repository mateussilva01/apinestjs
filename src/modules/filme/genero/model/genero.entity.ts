import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Genero {

  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @IsNotEmpty()
  @Column()
  nome: string;
}