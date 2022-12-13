import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StoresDocument = Stores & Document;

@Schema()
export class Stores {
   
   @Prop()
   storename: string; 
   
   @Prop()
   address: string; 
   
}

export const StoresSchema = SchemaFactory.createForClass(Stores);