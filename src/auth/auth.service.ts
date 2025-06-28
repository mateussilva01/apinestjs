import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Usuario } from 'src/modules/credencial/usuario/model/usuario.entity';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Usuario) 
    private repository: Repository<Usuario>,
    private jwtService: JwtService
  ) {}

  async cadastrar(nome: string, email: string, senha: string) {
    const usuario = await this.repository.findOneBy({ email });
    if (usuario) {
      throw new BadRequestException('Usuário já existe');
    }
    const hashedPassword = await bcrypt.hash(senha, 10);
    const novoUsuario = this.repository.create({
      nome,
      email,
      senha: hashedPassword,
    });
    await this.repository.save(novoUsuario);
    return { message: `Usuário ${novoUsuario.nome} registrado com sucesso` };
  }

  async login(email: string, password: string) {
    const usuario = await this.repository.findOneBy({ email });
    if (!usuario) {
      throw new BadRequestException('Credenciais inválidas');
    }
    const isPasswordValid = await bcrypt.compare(password, usuario.senha);
    if (!isPasswordValid) {
      throw new BadRequestException('Credenciais inválidas');
    }
    const token = this.jwtService.sign({ id: usuario.id, email: usuario.email });
    return { mensagem: `Usuário ${usuario.nome} já foi cadastrado`, token };
  }

}