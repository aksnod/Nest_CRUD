import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { constants } from './constants/constants';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('CRUD OP')
  .setDescription('crud api')
  .setVersion('1.0')
  .addTag('crud')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(constants.SWAGGER_URL, app, document);
  await app.listen(constants.PORT);
}
bootstrap();
