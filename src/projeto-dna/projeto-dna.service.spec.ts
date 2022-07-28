import { Test, TestingModule } from '@nestjs/testing';
import { ProjetoDnaService } from './projeto-dna.service';

describe('ProjetoDnaService', () => {
  let service: ProjetoDnaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjetoDnaService],
    }).compile();

    service = module.get<ProjetoDnaService>(ProjetoDnaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
