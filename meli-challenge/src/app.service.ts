import { Injectable } from '@nestjs/common';
import { DnaTest } from './dna-test/entities/dna-test.entity';

@Injectable()
export class AppService {

  public dna: DnaTest

  getHello(): string {
    return 'Hello World!';
  }

}
