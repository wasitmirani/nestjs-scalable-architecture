import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Swagger from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);



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
