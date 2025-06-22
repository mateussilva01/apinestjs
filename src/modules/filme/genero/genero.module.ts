import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BancoProvider } from 'src/database/banco.provider';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

@Module({
  controllers: [GeneroController],
  providers: [GeneroService, BancoProvider, JwtService],
})
export class GeneroModule {}
