import { Controller, Get, Post, Body } from '@nestjs/common';
import { PaginationParams } from '../common/decorators/pagination.decorator';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Get('category')
  getCategory(@PaginationParams() params): any {
    return this.entitiesService.getCategories(params);
  }

  @Post('category')
  createCategory(@Body() params): any {
    return this.entitiesService.createCategory(params);
  }
}
