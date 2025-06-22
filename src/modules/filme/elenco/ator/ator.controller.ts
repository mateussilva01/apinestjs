import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Usuario } from 'src/common/decorators/usuario.decorator';
import { CreateAtorDto } from './model/dto/create-ator.dto';
import { UpdateAtorDto } from './model/dto/update-ator.dto';
import { AtorService } from './ator.service';

@Controller('ator')
export class AtorController {

  constructor(private readonly atorService: AtorService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() createAtorDto: CreateAtorDto, @Usuario() usuario: string) {
    console.log(createAtorDto);
    return this.atorService.create(createAtorDto, usuario);
  }

  @Get()
  findAll(@Query('ignorar') ignorar: string) {
    return this.atorService.findAll(ignorar);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('ignorar') ignorar: string) {
    return this.atorService.findOne(id, ignorar);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() updateAtorDto: UpdateAtorDto, @Usuario() usuario: string) {
    return this.atorService.update(id, updateAtorDto, usuario);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  remove(@Param('id') id: string, @Usuario() usuario: string) {
    return this.atorService.remove(id, usuario);
  }
}
