import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './model/usuario.entity';
import { UpdateUsuarioDto } from './model/dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(id: string) {
   try {
      const usuario = await this.usuarioRepository.findOneOrFail({ where: { id } });
      return usuario;
    } catch (error) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }
  }

  update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }
    await this.usuarioRepository.softRemove(usuario);
  }

}