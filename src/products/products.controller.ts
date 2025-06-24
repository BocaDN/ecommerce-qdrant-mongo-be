import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductsService } from './service/products.service';
import {
  CreateProductRequestDto,
  CreateProductResponseDto,
} from './dto/create-product.dto';
import {
  UpdateProductRequestDto,
  UpdateProductResponseDto,
} from './dto/update-product.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetProductResponseDto } from './dto/get-product.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({
    status: 200,
    description: 'List of all products',
    type: [GetProductResponseDto],
  })
  async getAllProducts(): Promise<GetProductResponseDto[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Product item',
    type: GetProductResponseDto,
  })
  async getProductById(
    @Param('id') id: string,
  ): Promise<GetProductResponseDto> {
    return this.productsService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product' })
  @ApiResponse({
    status: 201,
    description: 'Created product',
    type: CreateProductResponseDto, // This can be GetProductResponseDto if they are the same
  })
  async createProduct(
    @Body() createProductsDto: CreateProductRequestDto,
  ): Promise<CreateProductResponseDto> {
    return this.productsService.create(createProductsDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing product' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({
    status: 200,
    description: 'Updated product',
    type: UpdateProductResponseDto, // Can also use GetProductResponseDto if you prefer
  })
  async updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductRequestDto,
  ): Promise<UpdateProductResponseDto> {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by ID' })
  @ApiParam({ name: 'id', description: 'Product ID' })
  @ApiResponse({ status: 200, description: 'Product deleted successfully' })
  async deleteProduct(
    @Param('id') id: string,
  ): Promise<UpdateProductResponseDto> {
    return this.productsService.delete(id);
  }
}
