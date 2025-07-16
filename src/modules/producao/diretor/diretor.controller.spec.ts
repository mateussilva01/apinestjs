import { Test, TestingModule } from '@nestjs/testing';
import { DiretorController } from './diretor.controller';
import { DiretorService } from './diretor.service';

describe('DiretorController', () => {
  let controller: DiretorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiretorController],
      providers: [DiretorService],
    }).compile();

    controller = module.get<DiretorController>(DiretorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
