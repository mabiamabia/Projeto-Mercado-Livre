import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetoDnaModule } from './projeto-dna/projeto-dna.module';

@Module({
  imports: [ProjetoDnaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
