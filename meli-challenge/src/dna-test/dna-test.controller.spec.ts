import { Test, TestingModule } from '@nestjs/testing';
import { DnaTestController } from './dna-test.controller';
import { DnaTestService } from './dna-test.service';

describe('DnaTestController', () => {
  let controller: DnaTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DnaTestController],
      providers: [DnaTestService],
    }).compile();

    controller = module.get<DnaTestController>(DnaTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
