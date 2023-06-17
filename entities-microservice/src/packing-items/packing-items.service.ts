import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePackingItemDto } from './dto/packing-items.dto';

@Injectable()
export class PackingItemsService {
  constructor(private readonly prismaService: PrismaService) {}

  /**
   * Create new packing item
   *
   * @param data
   */
  createItem(data: CreatePackingItemDto) {
    // return this.prismaService.packingItem.create({ data });
  }
}
