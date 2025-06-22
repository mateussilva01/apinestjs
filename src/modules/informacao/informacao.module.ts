import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BancoProvider } from 'src/database/banco.provider';
import { InformacaoController } from './informacao.controller';
import { InformacaoService } from './informacao.service';

@Module({
  controllers: [InformacaoController],
  providers: [InformacaoService, BancoProvider, JwtService]
})
export class InformacaoModule {}
