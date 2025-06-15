import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  logar(@Body() body: { email: string , senha: string }) {
    return this.authService.logar(body.email, body.senha);
  }

  @Post('/cadastrar')
  cadastrar(@Body() body: { email: string , senha: string }) {
    return this.authService.cadastrar(body.email, body.senha);
  }
}