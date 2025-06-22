import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { InformacaoService } from './informacao.service';

@Controller('informacao')
@UseGuards(JwtGuard)
export class InformacaoController {

  constructor(private readonly informacaoService: InformacaoService) {}

  @Get('diretores')
  pegarDiretores() {
    return this.informacaoService.pegarDiretores();
  }

  @Get('atores')
  pegarAtores() {
    return this.informacaoService.pegarAtores();
  }

  @Get('generos')
  pegarGeneros() {
    return this.informacaoService.pegarGeneros();
  }
  
}
