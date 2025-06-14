import { Controller, Get, UseGuards } from '@nestjs/common';
import { InfoService } from './info.service';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller('info')
export class InfoController {

  constructor(private readonly infoService: InfoService) {}

  @Get('diretores')
  @UseGuards(JwtGuard)
  pegarDiretores() {
    return this.infoService.pegarDiretores();
  }

  @Get('atores')
  @UseGuards(JwtGuard)
  pegarAtores() {
    return this.infoService.pegarAtores();
  }

  @Get('generos')
  @UseGuards(JwtGuard)
  pegarGeneros() {
    return this.infoService.pegarGeneros();
  }
  
}
