import { ApiProperty } from '@nestjs/swagger';

export class CreatePackingItemDto {
  @ApiProperty({ default: true })
  id: number;

  @ApiProperty({ default: true })
  createdAt: Date;

  @ApiProperty({ uniqueItems: true })
  name: string;

  @ApiProperty()
  category: number;
}
