import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BancoProvider } from 'src/database/banco.provider';
import { FilmeController } from './filme.controller';
import { FilmeService } from './filme.service';

@Module({
  controllers: [FilmeController],
  providers: [FilmeService, BancoProvider, JwtService],
})
export class FilmeModule {}
