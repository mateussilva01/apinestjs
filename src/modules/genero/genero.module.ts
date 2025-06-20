import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { BancoProvider } from 'src/database/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [GeneroController],
  providers: [GeneroService, BancoProvider, JwtService],
})
export class GeneroModule {}
