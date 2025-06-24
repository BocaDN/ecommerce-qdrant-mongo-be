import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsSchema } from './shared/models/product.model';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'), // No options needed here
    MongooseModule.forFeature([{ name: 'Product', schema: ProductsSchema }]),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
