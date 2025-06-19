import { Test, TestingModule } from '@nestjs/testing';
import { InformacaoController } from './informacao.controller';

describe('InformacaoController', () => {
  let controller: InformacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InformacaoController],
    }).compile();

    controller = module.get<InformacaoController>(InformacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
