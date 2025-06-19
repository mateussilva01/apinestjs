import { Module } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { FilmeController } from './filme.controller';
import { BancoProvider } from 'src/database/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [FilmeController],
  providers: [FilmeService, BancoProvider, JwtService],
})
export class FilmeModule {}
