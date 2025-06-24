import { IsEnum, IsString, IsArray, IsOptional } from 'class-validator';
import { StockStatus } from 'src/shared/models/product.model';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProductRequestDto {
  @ApiProperty({
    description: 'Name of product',
    example: 'CP - Surubelnita pneumatica 0.51.6Nm, CP2824',
  })
  @IsString()
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
    example: '6.343,00 Lei',
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
      'https://constructii-mag.ro/scule-pneumatice-si-compresoare-aer/cp-surubelnita-pneumatica-0-51-6nm-cp2824-6151630100',
    ],
  })
  @IsArray()
  @IsOptional()
  readonly images?: string[];

  @ApiProperty({
    description: 'Qdrant ID (Qdrant ObjectId)',
    example: '09715008-661b-44e7-a534-16dcce21812d',
  })
  readonly qdrant_id: string;

  @ApiProperty({
    description: 'Mongo ID (Mongo ObjectId)',
    example: '6859abc7c2c0c81e297b515c',
  })
  readonly mongo_id: string;

  @ApiProperty({
    description: 'Category',
    example: '/scule-pneumatice-si-compresoare-aer',
  })
  readonly category: string;

  @ApiProperty({
    description: 'Status of product',
    enum: StockStatus,
    example: StockStatus.STOC_EPUIZAT,
  })
  @IsString()
  @IsEnum(StockStatus)
  readonly status: StockStatus;
}

export class UpdateProductResponseDto {
  @IsString()
  readonly name: string;

  // @IsString()
  // readonly description?: string;

  @IsString()
  readonly price: string;

  // @IsNumber()
  // @IsOptional()
  // readonly stock?: number;

  @IsString()
  @IsArray()
  readonly images?: string[];

  @IsString()
  readonly qdrant_id: string;

  @IsString()
  readonly mongo_id: string;

  @IsString()
  readonly category: string;

  @IsString()
  @IsEnum(StockStatus)
  readonly status: StockStatus;

  @IsString()
  readonly createdAt: string;

  @IsString()
  readonly updatedAt: string;
}
