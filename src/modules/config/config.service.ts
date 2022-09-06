import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.NODE_ENV !== 'production';

    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../../.env.dev';
      const existsPath = fs.existsSync(envFilePath);

      if (!existsPath) {
        console.log('.env.dev file not exist');
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      this.envConfig = {
        AMQP_URL: process.env.AMQP_URL,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
