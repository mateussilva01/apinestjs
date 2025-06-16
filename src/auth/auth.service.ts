import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BancoProvider } from 'src/banco/banco.provider';
import { Usuario } from 'src/model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  
  constructor(
    private jwtService: JwtService,
    private banco: BancoProvider
  ) {}
  
  logar(email: string, senha: string) {
    if (!email || !senha) {
      throw new BadRequestException('Dados estão inválidos');
    }
    const usuario: Usuario | undefined = this.banco.usuarios.find(usuario => usuario.email === email);
    if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
      throw new BadRequestException('Email ou senha incorretos')
    }
    const token = this.jwtService.sign({ email });
    return {token};
  }

  cadastrar(email: string, senha: string) {
    if (!email || !senha) {
      throw new BadRequestException('Dados estão inválidos');
    }
    const usuario: Usuario | undefined = this.banco.usuarios.find(usuario => usuario.email === email);
    if (usuario) {
      throw new HttpException('Usuário já cadastrado', HttpStatus.CONFLICT);
    }
    const novoUsuario = { email, senha: bcrypt.hashSync(senha, 5) };
    console.log(novoUsuario);
    this.banco.usuarios.push(novoUsuario);
    return { mensagem: `Usuário ${novoUsuario.email} já foi cadastrado`}
  }

}