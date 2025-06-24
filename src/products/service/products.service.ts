import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductRequestDto } from '../dto/create-product.dto';
import { Product } from 'src/shared/models/product.model';
import { UpdateProductRequestDto } from '../dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) { }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().lean().exec();
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id).lean().exec();
  }

  async create(createProductsDto: CreateProductRequestDto): Promise<Product> {
    return this.productModel.create(createProductsDto);
  }

  async update(
    id: string,
    updateProductsDto: UpdateProductRequestDto,
  ): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(id, updateProductsDto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id).lean().exec();
  }
}
