import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { envSchema } from './common/constants/env.validation.shema';

@Module({
  imports: [ConfigModule.forRoot(
    {
      validationSchema: envSchema
    }
  ), DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
