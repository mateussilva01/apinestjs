import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diretor } from './model/diretor.entity';
import { DiretorController } from './diretor.controller';
import { DiretorService } from './diretor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Diretor])],
  controllers: [DiretorController],
  providers: [DiretorService, JwtService],
})
export class DiretorModule {}
