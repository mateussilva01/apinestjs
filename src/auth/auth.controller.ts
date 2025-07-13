import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service'
import { CreateUsuarioDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller()
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('/cadastrar')
  cadastrar(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.authService.cadastrar(createUsuarioDto);
  }

  @Post('/login')
  login(@Body() login: LoginDto, @Res({ passthrough: true }) response: Response) {
    return this.authService.login(login);
  }

}