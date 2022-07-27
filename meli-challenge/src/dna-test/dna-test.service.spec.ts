import { Test, TestingModule } from '@nestjs/testing';
import { DnaTestService } from './dna-test.service';

describe('DnaTestService', () => {
  let service: DnaTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DnaTestService],
    }).compile();

    service = module.get<DnaTestService>(DnaTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
