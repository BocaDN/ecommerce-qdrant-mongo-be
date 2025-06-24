import {
  IsString,
  IsNotEmpty,
  IsOptional,
  // IsNumber,
  IsEnum,
  IsArray,
  IsMongoId,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { StockStatus } from 'src/shared/models/product.model';

export class CreateProductRequestDto {
  @ApiProperty({
    description: 'Name of product',
    example: 'fortis - Surubelnita cu maner T, T30x150mm',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  // @ApiPropertyOptional({
  //   description: 'Optional description of the product',
  //   example: 'Surubelnita de calitate',
  // })
  // @IsString()
  // @IsOptional()
  // readonly description?: string;

  @ApiProperty({
    description: 'Pretul produsului',
    example: '24,24 Lei',
  })
  @IsString()
  readonly price: string;

  // @ApiPropertyOptional({
  //   description: 'Stock quantity available',
  //   example: 100,
  // })
  // @IsNumber()
  // @IsOptional()
  // readonly stock?: number;

  @ApiPropertyOptional({
    description: 'Array of image URLs',
    example: [
      'https://constructii-mag.ro/scule-si-unelte/fortis-surubelnita-cu-maner-t-t30x150mm',
    ],
  })
  @IsArray()
  @IsOptional()
  readonly images?: string[];

  @ApiProperty({
    description: 'Qdrant ID (Qdrant ObjectId)',
    example: '06cf52fe-39a8-444f-a56c-8522c8c67db8',
  })
  // @IsMongoId()
  @IsNotEmpty()
  readonly qdrant_id: string;

  @ApiProperty({
    description: 'Mongo ID (Mongo ObjectId)',
    example: '6859ab9ec2c0c81e297b5159',
  })
  @IsMongoId()
  @IsNotEmpty()
  readonly mongo_id: string;

  @ApiProperty({
    description: 'Category',
    example: '/scule-si-unelte',
  })
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({
    description: 'Status of product',
    enum: StockStatus,
    example: StockStatus.STOC_DISPONIBIL,
  })
  @IsNotEmpty()
  @IsString()
  @IsEnum(StockStatus)
  readonly status: StockStatus;
}

export class CreateProductResponseDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  // @IsString()
  // @IsOptional()
  // readonly description?: string;

  @IsString()
  readonly price: string;

  // @IsNumber()
  // @IsOptional()
  // readonly stock?: number;

  @IsArray()
  @IsOptional()
  readonly images?: string[];

  // @IsMongoId()
  @IsNotEmpty()
  readonly qdrant_id: string;

  @IsMongoId()
  @IsNotEmpty()
  readonly mongo_id: string;

  @IsNotEmpty()
  readonly category: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(StockStatus)
  readonly status: StockStatus;

  @IsString()
  readonly createdAt: string;

  @IsString()
  readonly updatedAt: string;
}
