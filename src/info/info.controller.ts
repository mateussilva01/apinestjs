import { Controller, Get, UseGuards } from '@nestjs/common';
import { InfoService } from './info.service';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller('info')
@UseGuards(JwtGuard)
export class InfoController {

  constructor(private readonly infoService: InfoService) {}

  @Get('diretores')
  pegarDiretores() {
    return this.infoService.pegarDiretores();
  }

  @Get('atores')
  pegarAtores() {
    return this.infoService.pegarAtores();
  }

  @Get('generos')
  pegarGeneros() {
    return this.infoService.pegarGeneros();
  }
  
}
