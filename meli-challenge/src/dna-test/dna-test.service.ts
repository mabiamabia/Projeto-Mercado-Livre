import { Injectable } from '@nestjs/common';
import { CreateDnaTestDto } from './dto/create-dna-test.dto';
// import { UpdateDnaTestDto } from './dto/update-dna-test.dto';

@Injectable()
export class DnaTestService {
  create(createDnaTestDto: CreateDnaTestDto) {
    return 'This action adds a new dnaTest';
  }

  findAll() {
    return `This action returns all dnaTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dnaTest`;
  }

  // update(id: number, updateDnaTestDto: UpdateDnaTestDto) {
  //   return `This action updates a #${id} dnaTest`;
  // }

  remove(id: number) {
    return `This action removes a #${id} dnaTest`;
  }
}
