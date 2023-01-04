import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { PaginationParams } from './common/decorators/pagination.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('category')
  getCategory(@PaginationParams() params): any {
    return this.appService.getCategories(params);
  }

  @Get('/:id')
  getCategoryById(@Param() params) {
    const { id } = params;
    return this.appService.getCategoryById(id);
  }

  @Post('category')
  createCategory(@Query() params): any {
    return this.appService.createCategory(params);
  }
}
