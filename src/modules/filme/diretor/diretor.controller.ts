import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Usuario } from 'src/common/decorators/usuario.decorator';
import { CreateDiretorDto } from './model/dto/create-diretor.dto';
import { UpdateDiretorDto } from './model/dto/update-diretor.dto';
import { DiretorService } from './diretor.service';

@Controller('diretor')
export class DiretorController {

  constructor(private readonly diretorService: DiretorService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createDiretorDto: CreateDiretorDto, @Usuario() usuario: string) {
    console.log(createDiretorDto);
    return this.diretorService.create(createDiretorDto, usuario);
  }

  @Get()
  findAll(@Query('ignorar') ignorar: string) {
    return this.diretorService.findAll(ignorar);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('ignorar') ignorar: string) {
    return this.diretorService.findOne(id, ignorar);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateDiretorDto: UpdateDiretorDto, @Usuario() usuario: string) {
    return this.diretorService.update(id, updateDiretorDto, usuario);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string, @Usuario() usuario: string) {
    return this.diretorService.remove(id, usuario);
  }
}
