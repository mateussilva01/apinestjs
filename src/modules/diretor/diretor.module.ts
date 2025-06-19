import { Module } from '@nestjs/common';
import { DiretorService } from './diretor.service';
import { DiretorController } from './diretor.controller';
import { BancoProvider } from 'src/database/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [DiretorController],
  providers: [DiretorService, BancoProvider, JwtService],
})
export class DiretorModule {}
