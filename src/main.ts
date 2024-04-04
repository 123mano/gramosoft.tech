import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ValidationPipe } from '@nestjs/common';
import { ALLOWED_METHODS, ALLOWED_URLS } from './utils/responsehandle';
import { setupSwagger } from './swagger';

async function bootstrap() {
  require('dotenv').config();
  const corsOption: CorsOptions = Object.freeze({
    origin: ALLOWED_URLS,
    method: ALLOWED_METHODS,
    credentials: true,
  });
 const app = await NestFactory.create(AppModule);
  app.enableCors(corsOption);
  app.setGlobalPrefix('api/v1/gramasoft');
  app.useGlobalPipes(new ValidationPipe())
 setupSwagger(app);
  await app.listen(3500);
}
bootstrap();