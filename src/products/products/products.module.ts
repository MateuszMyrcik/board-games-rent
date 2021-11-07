import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsSchema } from 'src/products/products/products.model';
import { ProductsService } from './products.service';

@Module({
  providers: [ProductsService],
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductsSchema }]),
  ],
  controllers: [ProductsService],
})
export class ProductsModule {}
