import { Injectable } from '@nestjs/common';
import { Category as CategoryModel } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Return all categories. This method is paginated
   *
   * @param skip
   * @param take
   */
  async getCategories(
    skip: number,
    take: number,
  ): Promise<Array<CategoryModel> | null> {
    return this.prismaService.category.findMany({
      skip,
      take,
    });
  }

  /**
   * Create new category
   *
   * @param data
   */
  createCategory(data: CreateCategoryDto) {
    try {
      return this.prismaService.category.create({ data });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Return category by its id
   *
   * @param id
   */
  getCategoryById(id: string): Promise<CategoryModel | null> {
    return this.prismaService.category.findUnique({
      where: { id: Number(id) },
    });
  }
}
