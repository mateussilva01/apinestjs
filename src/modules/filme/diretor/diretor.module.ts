import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BancoProvider } from 'src/database/banco.provider';
import { DiretorController } from './diretor.controller';
import { DiretorService } from './diretor.service';

@Module({
  controllers: [DiretorController],
  providers: [DiretorService, BancoProvider, JwtService],
})
export class DiretorModule {}
