import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BancoProvider } from './database/banco.provider';
import { FilmeModule } from './modules/filme/filme.module';
import { DiretorModule } from './modules/filme/diretor/diretor.module';
import { AtorModule } from './modules/filme/elenco/ator/ator.module';
import { GeneroModule } from './modules/filme/genero/genero.module';
import { InformacaoModule } from './modules/informacao/informacao.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    JwtModule,
    AuthModule,
    FilmeModule, 
    DiretorModule,
    GeneroModule,
    AtorModule, 
    InformacaoModule,
  ],
  controllers: [AppController],
  providers: [AppService, BancoProvider],
})
export class AppModule {}
