/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { ProjetoDnaService } from './projeto-dna.service';

/* //chamando o json de humanos
let humanJson = require('./model/humanDna.service');
console.log(humanJson);

let simianJson = require('./model/simianDna.service');
console.log(simianJson); */

const { dna } = require('./model/human.json')
console.log(`O DNA  do humano é ${dna}`);


@Controller('projeto-dna')
export class ProjetoDnaController {

  constructor(private readonly projetoDnaService: ProjetoDnaService) {}
/* 
  //função getAll retorna todos os dna's de humanos
  getAllhuman = (response) => {
    response.status(200).json([
      {
        human: humanJson,
      },
    ]);
  };

  //função getAll retorna todos os dna's de simios
  getAllSimian = (response) => {
    response.status(200).json([
      {
        simian: simianJson,
      },
    ]);
    console.log(simianJson);
  };
   */
}
