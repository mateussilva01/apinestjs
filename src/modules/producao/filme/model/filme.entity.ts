import { IsArray, IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from 'typeorm';
import { Diretor } from '../../diretor/model/diretor.entity';
import { Genero } from '../../genero/model/genero.entity';
import { Ator } from '../../elenco/model/ator.entity';

@Entity()
export class Filme {
  
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
  @OneToMany(() => FilmeGenero, filmeGenero => filmeGenero.filme, { 
    cascade: true,
    orphanedRowAction: 'delete' //exclui os registros relacionados
  })
  generos: FilmeGenero[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @OneToMany(() => FilmeAtor, filmeAtor => filmeAtor.filme, { 
    cascade: true,
    orphanedRowAction: 'delete'
  })
  atores: FilmeAtor[];

  @IsNotEmpty()
  @Column()
  sinopse: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}

@Entity()
@Unique(['filme', 'genero'])
export class FilmeGenero {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Filme, filme => filme.generos, {
    onDelete: 'CASCADE' //quando o filme for deletado, remove-se da filme_genero
  })
  @JoinColumn({ name: 'filmeId' })
  filme: Filme;

  @ManyToOne(() => Genero, genero => genero.id)
  @JoinColumn({ name: 'generoId' })
  genero: Genero;
}

@Entity()
@Unique(['filme', 'ator'])
export class FilmeAtor {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Filme, filme => filme.atores, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'filmeId' })
  filme: Filme;

  @ManyToOne(() => Ator, ator => ator.id)
  @JoinColumn({ name: 'atorId' })
  ator: Ator;
}