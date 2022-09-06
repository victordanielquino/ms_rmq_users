import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async findOne(id: string) {
    console.log('id:', id);
    return await id;
  }
}
