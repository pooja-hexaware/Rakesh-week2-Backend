import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type CartDocument  = Cart & Document;

@Schema()
export class Cart {

    @Prop()
    coupon : string;
}

export const CartSchema =SchemaFactory.createForClass(Cart)