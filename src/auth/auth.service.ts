import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashingPassword, verificarSenha } from './helpers/password.helper';
import { CreateUsuarioDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { Usuario } from 'src/modules/credencial/usuario/model/usuario.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario)
    private repository: Repository<Usuario>,
    private jwtService: JwtService
  ) {}

  async cadastrar(createUsuarioDto: CreateUsuarioDto) {
    const { nome, email, senha } = createUsuarioDto;
    const hashedPassword = await hashingPassword(senha);
    const usuario = await this.repository.findOne({ where: { email } });
    if (usuario)
      throw new BadRequestException(`Usuário já existe`);
    const novoUsuario = this.repository.create({
      nome,
      email,
      senha: hashedPassword
    });
    await this.repository.save(novoUsuario);
    return { message: `Usuário '${novoUsuario.nome}' registrado com sucesso` };
  }

  async login(data: LoginDto) {
    const { email, senha } = data;
    const usuario = await this.repository.findOne({ where: { email } });
    if (!usuario)
      throw new BadRequestException('email ou senha incorreto');
    const validaSenha = await verificarSenha(senha, usuario.senha);
    if (!validaSenha)
      throw new BadRequestException('email ou senha incorreto');
    const token = this.jwtService.sign({ id: usuario.id, email: usuario.email });
    return { token };
  }

}