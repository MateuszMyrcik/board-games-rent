import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from 'src/products/products.controller';
import { ProductsModule } from 'src/products/products.module';
import { ProductsService } from 'src/products/products.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PASSWORD = 'boardgameZXC123';
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://mati:${DB_PASSWORD}@cluster0.gs8zv.mongodb.net/board-games-db?retryWrites=true&w=majority`,
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// TODO: dokonczyc crud tutorial
// TODO: utworzyc schemat bazy danych
