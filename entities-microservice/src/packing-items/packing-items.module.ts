import { Module } from '@nestjs/common';
import { PackingItemsService } from './packing-items.service';
import { PackingItemsController } from './packing-items.controller';

@Module({
  providers: [PackingItemsService],
  controllers: [PackingItemsController],
})
export class PackingItemsModule {}
