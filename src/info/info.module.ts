import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { BancoProvider } from 'src/banco/banco.provider';

@Module({
  providers: [InfoService, BancoProvider]
})
export class InfoModule {}
