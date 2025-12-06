import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashingPassword } from 'src/auth/helpers/password.helper';
import { UpdateUsuarioDto, UpdateUsuarioDtoStatus } from './model/dto/update-usuario.dto';
import { Usuario } from './model/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Usuario)
    private readonly updateUsuarioDtoRepository: Repository<UpdateUsuarioDto>,
  ) {}

  findAll() {
    return this.usuarioRepository.find({
      order: {
        atualizacao: 'DESC',
        insercao: 'DESC'
      }
    });
  }

  async findOne(id: string) {
    try {
      const usuario = await this.usuarioRepository.findOneOrFail({ where: { id } });
      return usuario;
    } catch (error) {
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    }
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const { status, nome, email, senha } = updateUsuarioDto;
    const usuario = await this.updateUsuarioDtoRepository.findOne({ where: { id } });
    const usuarioEmail = await this.updateUsuarioDtoRepository.findOne({ where: { email } });
    if (!usuario)
      throw new BadRequestException(`Usuário com id ${id} não encontrado`);
    if (email) {
      if (usuarioEmail && usuarioEmail.id !== id)
        throw new BadRequestException('E-mail já está em uso');
    }
    console.log(usuarioEmail, usuarioEmail.id);
    const hashedPassword = await hashingPassword(senha);
    const novoUsuario = await this.updateUsuarioDtoRepository.update(id, {
      status,
      nome,
      email,
      senha: hashedPassword,
    });
    return novoUsuario;
  }

  async remove(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario)
      throw new NotFoundException(`Usuário com id ${id} não encontrado`);
    this.usuarioRepository.softRemove(usuario);
  }

}