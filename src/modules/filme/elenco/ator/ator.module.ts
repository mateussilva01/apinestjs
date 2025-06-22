import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BancoProvider } from 'src/database/banco.provider';
import { AtorController } from './ator.controller';
import { AtorService } from './ator.service';

@Module({
  controllers: [AtorController],
  providers: [AtorService, BancoProvider, JwtService],
})
export class AtorModule {}
