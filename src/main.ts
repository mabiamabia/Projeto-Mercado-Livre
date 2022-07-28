import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8080;

async function hello() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  console.log(`DNA funcionando na porta: ${PORT}`);

}
hello();
