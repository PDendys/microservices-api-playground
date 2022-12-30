import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('event-pattern')
  handleTest(): void {
    return this.appService.testEventPattern();
  }

  @Get('message-pattern')
  handleMessage(): any {
    return this.appService.testMessagePattern();
  }

  @Get('category')
  getCategory(@Query() params): any {
    return this.appService.getCategories(params);
  }
}
