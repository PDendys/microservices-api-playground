import { Body, Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PackingItemsService } from './packing-items.service';
import { CreatePackingItemDto } from './dto/packing-items.dto';

@Controller('packing-items')
export class PackingItemsController {
  constructor(private readonly packingItemService: PackingItemsService) {}

  @MessagePattern('ENTITIES.PACKING_ITEM.CREATE')
  createCategory(@Body() packingItemDto: CreatePackingItemDto) {
    return this.packingItemService.createItem(packingItemDto);
  }
}
