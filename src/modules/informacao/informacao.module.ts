import { Module } from '@nestjs/common';
import { InformacaoService } from './informacao.service';
import { BancoProvider } from 'src/database/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [InformacaoService, BancoProvider, JwtService]
})
export class InfoModule {}
