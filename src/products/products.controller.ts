import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { UpdateProductDto } from 'src/products/dto/update-product.dto';
import { Product } from 'src/products/schema/products.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':body')
  findOne(@Param('body') body: string) {
    return this.productsService.findOne(body);
  }

  @Put(':body')
  update(
    @Param('body') body: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateOne(body, updateProductDto);
  }

  @Delete(':body')
  delete(@Param('body') body: string) {
    return this.productsService.deleteOne(body);
  }
}
