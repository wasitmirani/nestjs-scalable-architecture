import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Swagger from '@nestjs/swagger';
import { APP_CONSTANTS } from './common/constants/app.constants';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`${APP_CONSTANTS.API_PREFIX}/${APP_CONSTANTS.API_VERSION}`);

  const config = new Swagger.DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('NestJS Swagger API docs')
    .setVersion('1.0')
    .build();

  const document = Swagger.SwaggerModule.createDocument(app, config);
  Swagger.SwaggerModule.setup('/docs', app, document, {
    swaggerOptions: { persistAuthorization: true },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
