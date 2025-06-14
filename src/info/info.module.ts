import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { BancoProvider } from 'src/banco/banco.provider';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [InfoService, BancoProvider, JwtService]
})
export class InfoModule {}
