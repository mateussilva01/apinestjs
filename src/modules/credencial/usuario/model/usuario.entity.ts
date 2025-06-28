import { IsNotEmpty, IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {

  @IsNotEmpty()
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

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