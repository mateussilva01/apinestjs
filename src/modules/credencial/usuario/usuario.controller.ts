import { Body, Controller, Delete, Get, Param, Patch, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UpdateUsuarioDto } from './model/dto/update-usuario.dto';

@Controller('usuario')
@UseGuards(JwtGuard)
export class UsuarioController {

  constructor(
    private readonly usuarioService: UsuarioService,
  ) {}

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }

}