import { Body, Controller, Post } from '@nestjs/common';
import { Email } from 'src/common/decorators/email.decorator';
import { Senha } from 'src/common/decorators/senha.decorator';
import { AuthService } from './auth.service'

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/cadastrar')
  cadastrar(@Body('nome') nome: string, @Email() email: string, @Senha() senha: string) {
    return this.authService.cadastrar(nome, email, senha);
  }

  @Post('/login')
  login(@Email() email: string, @Senha() senha: string) {
    return this.authService.login(email, senha);
  }

}