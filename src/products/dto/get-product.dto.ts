import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsMongoId, IsString } from 'class-validator';
import { StockStatus } from 'src/shared/models/product.model';

export class UpdateProductResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the todo',
    example: '684fec069b744cd74cfa8cf3',
  })
  @IsString()
  @IsMongoId()
  readonly _id: string;

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
