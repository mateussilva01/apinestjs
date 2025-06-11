import { Module } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { FilmesController } from './filmes.controller';
import { BancoProvider } from 'src/banco/banco.provider';

@Module({
  controllers: [FilmesController],
  providers: [FilmesService, BancoProvider],
})
export class FilmesModule {}
