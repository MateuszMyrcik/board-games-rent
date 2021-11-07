import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const DB_PASSWORD = process.env.DB_PASSWORD;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://mati:${DB_PASSWORD}@cluster0.gs8zv.mongodb.net/board-games-db?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
