import { Get, Injectable } from '@nestjs/common';
import { Product } from 'src/products/products/products.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  getProducts() {
    return [...this.products];
  }

  @Get()
  getAllProducts() {
    return this.getProducts();
  }
}
