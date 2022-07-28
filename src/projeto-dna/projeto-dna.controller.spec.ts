import { Test, TestingModule } from '@nestjs/testing';
import { ProjetoDnaController } from './projeto-dna.controller';
import { ProjetoDnaService } from './projeto-dna.service';

describe('ProjetoDnaController', () => {
  let controller: ProjetoDnaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjetoDnaController],
      providers: [ProjetoDnaService],
    }).compile();

    controller = module.get<ProjetoDnaController>(ProjetoDnaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
