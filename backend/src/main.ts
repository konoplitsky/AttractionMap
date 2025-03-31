import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 10002;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Attraction Map').setVersion('1.0').build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);

  await app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}
bootstrap();
