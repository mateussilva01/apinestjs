import { Test, TestingModule } from '@nestjs/testing';
import { DiretorService } from './diretor.service';

describe('DiretorService', () => {
  let service: DiretorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiretorService],
    }).compile();

    service = module.get<DiretorService>(DiretorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
