import { Test, TestingModule } from '@nestjs/testing';
import { FilmeService } from './filme.service';

describe('FilmeService', () => {
  let service: FilmeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmeService],
    }).compile();

    service = module.get<FilmeService>(FilmeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
