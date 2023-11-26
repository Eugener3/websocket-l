import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  const port = 5002
  await app.listen(port);
  console.log(`Server has been started on ${port} port`);
}
start();
