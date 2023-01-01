import { Controller, Get } from '@nestjs/common';
import { PaginationParams } from '../common/decorators/pagination.decorator';
import { EntitiesService } from './entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private readonly appService: EntitiesService) {}

  @Get('category')
  getCategory(@PaginationParams() params): any {
    return this.appService.getCategories(params);
  }
}
