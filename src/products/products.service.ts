import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { Product, ProductDocument } from 'src/products/schema/products.schema';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getProducts() {
    const products = await this.productModel.find().exec();
    return [...this.products];
  }

  getAllProducts() {
    return this.getProducts();
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return new this.productModel(createProductDto).save();
  }

  async findAll() {
    return this.productModel.find();
  }

  async findOne(id: string) {
    return this.productModel.findOne({ _id: id });
  }

  async updateOne(id: string, updateProductDto: UpdateProductDto) {
    console.log(id, updateProductDto);
    return this.productModel.updateOne(
      { _id: id },
      { $set: { ...updateProductDto } },
    );
  }

  async deleteOne(id: string) {
    return this.productModel.deleteOne({ _id: id });
  }
}
