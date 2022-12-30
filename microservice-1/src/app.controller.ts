import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('SAMPLE_EVENT')
  handleSampleEvent(data: any) {
    console.log('SAMPLE_EVENT', data);
  }

  @MessagePattern('SAMPLE_MESSAGE')
  handleMessage(data: any) {
    console.log('SAMPLE_MESSAGE', data);
    return { success: true };
  }
}
