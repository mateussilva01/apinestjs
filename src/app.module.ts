import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { TypeormConfigService } from './config/typeorm.config.service';
import { AuthModule } from './auth/auth.module';
import { FilmeModule } from './modules/producao/filme/filme.module';
import { DiretorModule } from './modules/producao/diretor/diretor.module';
import { AtorModule } from './modules/producao/elenco/ator.module';
import { GeneroModule } from './modules/producao/genero/genero.module';
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
  providers: [AppService],
})
export class AppModule {}
