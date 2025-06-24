import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsEnum, IsMongoId, IsString } from 'class-validator';
import { StockStatus } from 'src/shared/models/product.model';

export class GetProductResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the todo',
    example: '684fec069b744cd74cfa8cf3',
  })
  @IsString()
  @IsMongoId()
  readonly _id: string;

  @ApiProperty({
    description: 'Name of product',
    example: 'fortis - Surubelnita cu maner T, T30x150mm',
  })
  @IsString()
  readonly name: string;

  // @IsString()
  // readonly description?: string;

  @ApiProperty({
    description: 'Pretul produsului',
    example: '24,24 Lei',
  })
  @IsString()
  readonly price: string;

  // @IsNumber()
  // @IsOptional()
  // readonly stock?: number;

  @ApiPropertyOptional({
    description: 'Array of image URLs',
    example: [
      'https://constructii-mag.ro/scule-si-unelte/fortis-surubelnita-cu-maner-t-t30x150mm',
    ],
  })
  @IsString()
  @IsArray()
  readonly images?: string[];

  @ApiProperty({
    description: 'Qdrant ID (Qdrant ObjectId)',
    example: '06cf52fe-39a8-444f-a56c-8522c8c67db8',
  })
  @IsString()
  readonly qdrant_id: string;

  @ApiProperty({
    description: 'Category',
    example: '/scule-si-unelte',
  })
  @IsString()
  readonly category: string;

  @ApiProperty({
    description: 'Status of product',
    enum: StockStatus,
    example: StockStatus.STOC_DISPONIBIL,
  })
  @IsString()
  @IsEnum(StockStatus)
  readonly status: StockStatus;

  @ApiProperty({
    description: 'Creation date of the todo',
    example: '2023-10-10T12:00:00.000Z',
  })
  @IsString()
  readonly createdAt: string;

  @ApiProperty({
    description: 'Last update date of the todo',
    example: '2023-10-11T12:00:00.000Z',
  })
  @IsString()
  readonly updatedAt: string;
}
