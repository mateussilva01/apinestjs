import { Test, TestingModule } from '@nestjs/testing';
import { InformacaoService } from './informacao.service';

describe('InformacaoService', () => {
  let service: InformacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InformacaoService],
    }).compile();

    service = module.get<InformacaoService>(InformacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
