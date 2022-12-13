import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart, CartDocument } from "./entities/cart.entity";

@Injectable()
export class CartRepo{

    constructor(
        @InjectModel(Cart.name)
        private readonly cartModel: Model<CartDocument>,
    ){ }

    async create(data) : Promise<Cart> {
        return new this.cartModel(data).save();
    }

    async findAll() : Promise<Cart[]> {
        return this.cartModel.find({}).exec();
    }

    async findOne(id) : Promise<Cart> {
        return this.cartModel.findOne(id);
    }

    async update(_id,data) : Promise<Cart> {
        return this.cartModel.findOneAndUpdate(_id, data);
    }

    async remove(id) : Promise<Cart> {
        return this.cartModel.findByIdAndDelete(id);
    }
    
}