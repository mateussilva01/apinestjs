import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ator } from './model/ator.entity';
import { AtorController } from './ator.controller';
import { AtorService } from './ator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ator])],
  controllers: [AtorController],
  providers: [AtorService, JwtService],
})
export class AtorModule {}
