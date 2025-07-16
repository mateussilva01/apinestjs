import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { CreateAtorDto } from './model/dto/create-ator.dto';
import { UpdateAtorDto } from './model/dto/update-ator.dto';
import { AtorService } from './ator.service';

@Controller('ator')
@UseGuards(JwtGuard)
export class AtorController {

  constructor(private readonly atorService: AtorService) {}

  @Post()
  create(@Body() createAtorDto: CreateAtorDto) {
    console.log(createAtorDto);
    return this.atorService.create(createAtorDto);
  }

  @Get()
  findAll() {
    return this.atorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.atorService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.atorService.remove(id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAtorDto: UpdateAtorDto) {
    return this.atorService.update(id, updateAtorDto);
  }

}
