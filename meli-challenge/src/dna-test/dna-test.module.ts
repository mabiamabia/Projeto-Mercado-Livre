import { Module } from '@nestjs/common';
import { DnaTestService } from './dna-test.service';
import { DnaTestController } from './dna-test.controller';

@Module({
  controllers: [DnaTestController],
  providers: [DnaTestService]
})
export class DnaTestModule {}
