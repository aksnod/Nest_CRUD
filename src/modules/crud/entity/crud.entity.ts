import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CrudDocument = Crud & Document;

@Schema()
export class Crud {
  @Prop({ required: true, unique:true })
  email: string;

  @Prop()
  name: string;

  @Prop()
  address: string;

  
}

export const CrudSchema = SchemaFactory.createForClass(Crud);