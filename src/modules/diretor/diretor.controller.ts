import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { DiretorService } from './diretor.service';
import { UpdateDiretorDto } from './dto/update-diretor.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateDiretorDto } from './dto/create-diretor.dto';
import { Usuario } from 'src/common/decorators/usuario.decorator';

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
