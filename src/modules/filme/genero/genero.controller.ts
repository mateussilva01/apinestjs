import { Controller, Post, Body, UseGuards, Get, Param, Delete, Patch } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateGeneroDto } from './model/dto/create-genero.dto';
import { GeneroService } from './genero.service';
import { UpdateGeneroDto } from './model/dto/update-genero.dto';

@Controller('genero')
@UseGuards(JwtGuard)
export class GeneroController {

  constructor(private readonly generoService: GeneroService) {}

  @Post()
  create(@Body() createGeneroDto: CreateGeneroDto) {
    console.log(createGeneroDto);
    return this.generoService.create(createGeneroDto);
  }

  @Get()
  findAll() {
    return this.generoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneroDto: UpdateGeneroDto) {
    return this.generoService.update(id, updateGeneroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generoService.remove(id);
  }

}
