import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type MenuDocument = Menu & Document ;

@Schema()
export class Menu {

    @Prop()
    itemname:string;

    @Prop()
    itemdesc:string;

    @Prop()
    price:number;

    @Prop()
    toppings:string[];

    @Prop()
    storeid:number[];
  
}

export const MenuSchema = SchemaFactory.createForClass(Menu)