import { Test, TestingModule } from '@nestjs/testing';
import { AtorController } from './ator.controller';
import { AtorService } from './ator.service';

describe('AtorController', () => {
  let controller: AtorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AtorController],
      providers: [AtorService],
    }).compile();

    controller = module.get<AtorController>(AtorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
