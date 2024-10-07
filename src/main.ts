import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configSwagger } from './common/config/swagger.config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  configSwagger(app);
  app.use(helmet());
  await app.listen(3000);
  
}
bootstrap();
