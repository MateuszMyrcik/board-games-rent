import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
// import { ProductsController } from 'src/products/products.controller';
import { ProductsModule } from 'src/products/products.module';
// import { ProductsService } from 'src/products/products.service';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

// const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PASSWORD = 'boardgameZXC123';
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://mati:${DB_PASSWORD}@cluster0.gs8zv.mongodb.net/board-games-db?retryWrites=true&w=majority`,
    ),
    ProductsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
