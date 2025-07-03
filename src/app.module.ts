import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { TypeormConfigService } from './config/typeorm.config.service';
import { BancoProvider } from './database/banco.provider';
import { AuthModule } from './auth/auth.module';
import { FilmeModule } from './modules/filme/filme.module';
import { DiretorModule } from './modules/filme/diretor/diretor.module';
import { AtorModule } from './modules/filme/elenco/ator/ator.module';
import { GeneroModule } from './modules/filme/genero/genero.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './modules/credencial/usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: TypeormConfigService,
      inject: [TypeormConfigService],
    }),
    JwtModule,
    AuthModule,
    FilmeModule, 
    DiretorModule,
    GeneroModule,
    AtorModule, 
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService, BancoProvider],
})
export class AppModule {}
