import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  logar(email: string, senha: string) {
    if (!email || !senha) {
      throw new BadRequestException('Dados estão inválidos');
    }
    const emailUsuario = 'email@email.com';
    const senhaUsuario = 'senha';
    if (email !== emailUsuario || senha !== senhaUsuario) {
      throw new BadRequestException('Email ou senha incorretos')
    }
    const token = this.jwtService.sign({ email });
    return {token};
  }
}
