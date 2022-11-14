import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { Logger as PinoLogger } from 'nestjs-pino';
import { json } from 'express';
import { AppModule } from './app.module';
import { validationPipe } from '../libs/shared/src/validators/validation-pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Twitter')
    .setDescription('Searching Tweets')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  app.enableCors(options);
  app.use(json({ limit: '10mb' }));
  // app.useLogger(app.get(PinoLogger));
  app.useGlobalPipes(validationPipe);
  Logger.log('Starting API...', 'APILogger');

  await app.listen(3000);
}
bootstrap();
