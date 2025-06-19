import { Test, TestingModule } from '@nestjs/testing';
import { FilmeController } from './filme.controller';
import { FilmeService } from './filme.service';

describe('FilmeController', () => {
  let controller: FilmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilmeController],
      providers: [FilmeService],
    }).compile();

    controller = module.get<FilmeController>(FilmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
