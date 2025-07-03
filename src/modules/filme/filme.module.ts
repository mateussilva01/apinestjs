import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Filme, FilmeAtor, FilmeGenero } from './model/filme.entity';
import { FilmeService } from './filme.service';
import { FilmeController } from './filme.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Filme, FilmeGenero, FilmeAtor])],
  controllers: [FilmeController],
  providers: [FilmeService, JwtService],
})
export class FilmeModule {}
