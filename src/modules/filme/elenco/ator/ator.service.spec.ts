import { Test, TestingModule } from '@nestjs/testing';
import { AtorService } from './ator.service';

describe('AtorService', () => {
  let service: AtorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AtorService],
    }).compile();

    service = module.get<AtorService>(AtorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
