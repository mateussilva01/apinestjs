import { Test, TestingModule } from '@nestjs/testing';
import { BancoProvider } from './banco.provider';

describe('BancoProvider', () => {
  let service: BancoProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BancoProvider],
    }).compile();

    service = module.get<BancoProvider>(BancoProvider);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
