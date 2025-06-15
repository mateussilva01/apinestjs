import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { BancoProvider } from 'src/banco/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService, BancoProvider, JwtService],
})
export class FilmesModule {}
