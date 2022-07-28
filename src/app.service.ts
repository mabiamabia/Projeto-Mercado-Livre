import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá Mundo! Aqui você verifica se é humano ou símio';
  }
}
