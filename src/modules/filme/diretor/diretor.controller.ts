import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateDiretorDto } from './model/dto/create-diretor.dto';
import { UpdateDiretorDto } from './model/dto/update-diretor.dto';
import { DiretorService } from './diretor.service';

@Controller('diretor')
@UseGuards(JwtGuard)
export class DiretorController {

  constructor(
    private readonly diretorService: DiretorService
  ) {}

  @Post()
  create(@Body() createDiretorDto: CreateDiretorDto) {
    return this.diretorService.create(createDiretorDto);
  }

  @Get()
  findAll() {
    return this.diretorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diretorService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diretorService.remove(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiretorDto: UpdateDiretorDto) {
    return this.diretorService.update(id, updateDiretorDto);
  }

}