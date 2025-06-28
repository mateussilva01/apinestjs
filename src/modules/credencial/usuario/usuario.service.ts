import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { BancoProvider } from 'src/database/banco.provider';
import { CreateUsuarioDto } from './model/dto/create-usuario.dto';
import { UpdateUsuarioDto } from './model/dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './model/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuarioRepository.find();
  }

}