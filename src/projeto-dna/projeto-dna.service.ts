/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateProjetoDnaDto } from './dto/create-projeto-dna.dto';
/* import { UpdateProjetoDnaDto } from './dto/update-projeto-dna.dto'; */

@Injectable()
export class ProjetoDnaService {
  create(createProjetoDnaDto: CreateProjetoDnaDto) {
    return 'This action adds a new projetoDna';
  }

  findAll() {
    return `This action returns all projetoDna`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projetoDna`;
  }
/* 
  update(id: number, updateProjetoDnaDto: UpdateProjetoDnaDto) {
    return `This action updates a #${id} projetoDna`;
  } */

  remove(id: number) {
    return `This action removes a #${id} projetoDna`;
  }
}
