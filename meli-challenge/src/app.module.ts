import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DnaTestModule } from './dna-test/dna-test.module';

@Module({
  imports: [DnaTestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
