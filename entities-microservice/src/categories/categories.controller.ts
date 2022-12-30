import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/categories.dto';
import { PaginationParams } from '../common/decorators/pagination.decorator';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllCategories(
    @PaginationParams() params: { skip?: number; take?: number },
  ) {
    const { skip, take } = params;
    return this.categoriesService.getCategories(skip, take);
  }

  @Get('/:id')
  getCategoryById(@Param() params) {
    const { id } = params;
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @MessagePattern('ENTITIES.CATEGORY.GET')
  handleMessage(params) {
    console.log('params', params);
    return this.categoriesService.getCategories(0, 2);
    // console.log('SAMPLE_MESSAGE', data);
    // return { success: true };
  }
}
