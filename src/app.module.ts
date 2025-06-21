import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformacaoController } from './modules/informacao/informacao.controller';
import { InformacaoModule } from './modules/informacao/informacao.module';
import { InformacaoService } from './modules/informacao/informacao.service';
import { BancoProvider } from './database/banco.provider';
import { FilmeModule } from './modules/filme/filme.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { DiretorModule } from './modules/diretor/diretor.module';
import { DiretorService } from './modules/diretor/diretor.service';
import { GeneroModule } from './modules/genero/genero.module';
import { AtorModule } from './modules/elenco/ator/ator.module';

@Module({
  imports: [InformacaoModule, FilmeModule, DiretorModule, GeneroModule, AtorModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController, InformacaoController],
  providers: [AppService, InformacaoService, DiretorService, BancoProvider, JwtService],
})
export class AppModule {}
