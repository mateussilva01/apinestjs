import { Module } from '@nestjs/common';
import { AtorService } from './ator.service';
import { AtorController } from './ator.controller';
import { BancoProvider } from 'src/database/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [AtorController],
  providers: [AtorService, BancoProvider, JwtService],
})
export class AtorModule {}
