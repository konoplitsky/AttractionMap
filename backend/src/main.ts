import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import * as YAML from 'yaml';

async function bootstrap() {
  const PORT = process.env.PORT || 10002;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.URL_CLIENT,
    methods: 'GET,POST,PATCH,DELETE,PUT',
    credentials: true
  });

  const config = new DocumentBuilder().setTitle('Main Map').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, config);

  const yamlDocument = YAML.stringify(document);
  writeFileSync('./swagger.yaml', yamlDocument);

  SwaggerModule.setup('/api', app, document, {
    swaggerOptions: {
      urls: [{ url: '/api-docs.yaml', name: 'Swagger YAML' }]
    }
  });

  app.use('/api-docs.yaml', (_, res) => {
    res.setHeader('Content-Type', 'text/yaml');
    res.send(yamlDocument);
  });

  await app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

bootstrap();
