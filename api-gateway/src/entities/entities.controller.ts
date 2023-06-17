import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PaginationParams } from '../common/decorators/pagination.decorator';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Get('category')
  getCategories(@PaginationParams() params): any {
    return this.entitiesService.getCategories(params);
  }

  @Get('category/:id')
  getCategoryById(@Param() params): any {
    const { id } = params;
    return this.entitiesService.getCategoryById(id);
  }

  @Post('category')
  createCategory(@Body() params): any {
    return this.entitiesService.createCategory(params);
  }

  @Post('packing-item')
  createPackingItem(@Body() params) {
    return this.entitiesService.createPackingItem(params);
  }
}
