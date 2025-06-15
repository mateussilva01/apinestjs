import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createFilmeDto: any) {
    console.log(createFilmeDto);
    return this.filmesService.create(createFilmeDto);
  }

  @Get()
  findAll(@Query('ignorar') ignorar: string) {
    return this.filmesService.findAll(ignorar);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('ignorar') ignorar: string) {
    return this.filmesService.findOne(id, ignorar);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateFilmeDto) {
    return this.filmesService.update(id, updateFilmeDto);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string) {
    return this.filmesService.remove(id);
  }
}
