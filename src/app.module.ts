import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformacaoController } from './modules/informacao/informacao.controller';
import { InfoModule } from './modules/informacao/informacao.module';
import { InformacaoService } from './modules/informacao/informacao.service';
import { BancoProvider } from './database/banco.provider';
import { FilmeModule } from './modules/filme/filme.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [InfoModule, FilmeModule, ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController, InformacaoController],
  providers: [AppService, InformacaoService, BancoProvider, JwtService],
})
export class AppModule {}
