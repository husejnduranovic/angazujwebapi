import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const GLOBAL_PREFIX = "api";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  await app.listen(5000);
}
bootstrap();
