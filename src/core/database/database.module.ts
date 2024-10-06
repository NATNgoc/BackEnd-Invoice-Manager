import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvKeyConstant } from 'src/common/constants';
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              type: 'postgres',
              host: configService.get(EnvKeyConstant.POSTGRES_HOST),
              port: configService.get(EnvKeyConstant.POSTGRES_PORT),
              username: configService.get(EnvKeyConstant.POSTGRES_USER),
              password: configService.get(EnvKeyConstant.POSTGRES_PASSWORD),
              database: configService.get(EnvKeyConstant.POSTGRES_DB),
              entities: [
                __dirname + '/../**/*.entity.ts',
              ],
              synchronize: true,
            })
          }),
    ]
})
export class DatabaseModule {}
