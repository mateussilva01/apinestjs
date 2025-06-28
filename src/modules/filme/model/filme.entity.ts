import { IsArray, IsNotEmpty, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Diretor } from '../diretor/model/diretor.entity';
import { Genero } from '../genero/model/genero.entity';
import { Ator } from '../elenco/ator/model/ator.entity';

@Entity()
export class Filme {
  
  @IsNotEmpty()
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @IsNotEmpty()
  @Column()
  titulo: string;

  @IsNotEmpty()
  @Column()
  ano: Date;

  @IsNotEmpty()
  @ManyToOne(() => Diretor, { cascade: true })
  @JoinColumn()
  diretor: Diretor;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @OneToMany(() => FilmeAtor, filmeAtor => filmeAtor.filme, { cascade: true })
  generos: FilmeAtor[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @OneToMany(() => FilmeAtor, filmeAtor => filmeAtor.filme, { cascade: true })
  atores: FilmeAtor[];

  @IsNotEmpty()
  @Column()
  sinopse: string;
}

@Entity()
@Unique(['filme', 'genero'])
export class FilmeGenero {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Filme, filme => filme.atores)
  filme: Filme;

  @ManyToOne(() => Genero, genero => genero.id)
  genero: Genero;
}

@Entity()
@Unique(['filme', 'ator'])
export class FilmeAtor {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Filme, filme => filme.atores)
  filme: Filme;

  @ManyToOne(() => Ator, ator => ator.id)
  ator: Ator;
}