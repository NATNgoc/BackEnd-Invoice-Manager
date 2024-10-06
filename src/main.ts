import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configSwagger } from './common/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  configSwagger(app);
  await app.listen(3000);
}
bootstrap();
