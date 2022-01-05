import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  designer: string;

  @Prop(
    raw({
      from: { type: Number },
      to: { type: Number },
    }),
  )
  playersNumb: Record<string, any>;

  @Prop()
  suggestAge: number;

  @Prop(
    raw({
      from: { type: Number },
      to: { type: Number },
    }),
  )
  playTime: Record<string, any>;

  @Prop()
  prize: number;

  @Prop()
  reservation: number;

  @Prop()
  image: string;

  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  difficultyLevel: string;

  @Prop()
  body: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
