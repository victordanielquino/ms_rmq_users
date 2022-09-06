import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('findOne')
  async findOne(id: string) {
    const data = await this.appService.findOne(id);
    return {
      message: 'findOne ms',
      data,
    };
  }
}
