import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genero } from './model/genero.entity';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';

@Module({
  imports: [TypeOrmModule.forFeature([Genero])],
  controllers: [GeneroController],
  providers: [GeneroService, JwtService],
})
export class GeneroModule {}
