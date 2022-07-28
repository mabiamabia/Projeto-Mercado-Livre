import { Module } from '@nestjs/common';
import { ProjetoDnaService } from './projeto-dna.service';
import { ProjetoDnaController } from './projeto-dna.controller';

@Module({
  controllers: [ProjetoDnaController],
  providers: [ProjetoDnaService]
})
export class ProjetoDnaModule {}
