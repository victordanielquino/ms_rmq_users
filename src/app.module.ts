import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as Joi from 'joi';

import { ConfigModule } from '@nestjs/config';
import { enviroments } from './common/enviroments';
import config from './common/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env.dev',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        AMQP_URL: Joi.string().required(),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  /*static AMQP_URL: string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.AMQP_URL = this._configService.get(ConfigEnum.AMQP_URL);
  }*/
}
