import { Controller, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @MessagePattern('ENTITIES.CATEGORY.CREATE')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(createCategoryDto);
  }

  @MessagePattern('ENTITIES.CATEGORY.GET')
  getAllCategories(params) {
    const { skip, take } = params;
    return this.categoriesService.getCategories(skip, take);
  }

  @MessagePattern('ENTITIES.CATEGORY.GET_BY_ID')
  getCategoryById(data) {
    const { id } = data;
    return this.categoriesService.getCategoryById(Number(id));
  }
}
