import { Controller, Get } from '@nestjs/common';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {

  constructor(private infoService: InfoService) {}

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
