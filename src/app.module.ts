import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfoController } from './info/info.controller';
import { InfoModule } from './info/info.module';
import { InfoService } from './info/info.service';
import { BancoProvider } from './banco/banco.provider';
import { FilmesModule } from './filmes/filmes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [InfoModule, FilmesModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController, InfoController],
  providers: [AppService, InfoService, BancoProvider],
})
export class AppModule {}
