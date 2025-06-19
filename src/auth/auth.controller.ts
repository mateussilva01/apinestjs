import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Email } from 'src/common/decorators/email.decorator';
import { Senha } from 'src/common/decorators/senha.decorator';

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  logar(@Email() email: string, @Senha() senha: string) {
    return this.authService.logar(email, senha);
  }

  @Post('/cadastrar')
  cadastrar(@Email() email: string, @Senha() senha: string) {
    return this.authService.cadastrar(email, senha);
  }

}