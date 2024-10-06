import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './core/database/database.module';
import { envSchema } from './common/constants/env.validation.shema';
import { CustomerModule } from './module/customer/customer.module';
import { InvoiceModule } from './module/invoice/invoice.module';

@Module({
  imports: [ConfigModule.forRoot(
    {
      validationSchema: envSchema,
      isGlobal: true,
    }
  ), DatabaseModule, CustomerModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
