import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { FilmeService } from './filme.service';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { Usuario } from 'src/common/decorators/usuario.decorator';

@Controller('filme')
export class FilmeController {

  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createFilmeDto: CreateFilmeDto, @Usuario() usuario: string) {
    console.log(createFilmeDto);
    return this.filmeService.create(createFilmeDto, usuario);
  }

  @Get()
  findAll(@Query('ignorar') ignorar: string) {
    return this.filmeService.findAll(ignorar);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('ignorar') ignorar: string) {
    return this.filmeService.findOne(id, ignorar);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto, @Usuario() usuario: string) {
    return this.filmeService.update(id, updateFilmeDto, usuario);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string, @Usuario() usuario: string) {
    return this.filmeService.remove(id, usuario);
  }
}
