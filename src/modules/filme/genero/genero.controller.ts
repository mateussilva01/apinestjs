import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Usuario } from 'src/common/decorators/usuario.decorator';
import { CreateGeneroDto } from './model/dto/create-genero.dto';
import { UpdateGeneroDto } from './model/dto/update-genero.dto';
import { GeneroService } from './genero.service';

@Controller('genero')
export class GeneroController {

  constructor(private readonly generoService: GeneroService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createGeneroDto: CreateGeneroDto, @Usuario() usuario: string) {
    console.log(createGeneroDto);
    return this.generoService.create(createGeneroDto, usuario);
  }

  @Get()
  findAll(@Query('ignorar') ignorar: string) {
    return this.generoService.findAll(ignorar);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('ignorar') ignorar: string) {
    return this.generoService.findOne(id, ignorar);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto, @Usuario() usuario: string) {
    return this.generoService.update(id, updateGeneroDto, usuario);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string, @Usuario() usuario: string) {
    return this.generoService.remove(id, usuario);
  }
}
