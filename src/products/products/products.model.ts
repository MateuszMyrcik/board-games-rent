import * as mongoose from 'mongoose';

export const ProductsSchema = new mongoose.Schema({
  body: { type: String, required: true },
  title: { type: String, required: true },
});

export interface Product {
  body: string;
  title: string;
}
