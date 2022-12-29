import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ default: true })
  id: number;

  @ApiProperty({ default: true })
  createdAt: Date;

  @ApiProperty({ uniqueItems: true })
  name: string;
}
