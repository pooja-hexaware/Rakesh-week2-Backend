import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Toppings, ToppingsDocument } from "./entities/topping.entity";

@Injectable()
export class ToppingsRepo{

    constructor(
        @InjectModel(Toppings.name)
        private readonly toppingsModel: Model<ToppingsDocument>,
    ){ }

    async create(data) : Promise<Toppings> {
        return new this.toppingsModel(data).save();
    }

    async findAll() : Promise<Toppings[]> {
        return this.toppingsModel.find({}).exec();
    }

    async findOne(id) : Promise<Toppings> {
        return this.toppingsModel.findOne(id);
    }

    async update(_id,data) : Promise<Toppings> {
        return this.toppingsModel.findOneAndUpdate(_id, data);
    }

    async remove(id) : Promise<Toppings> {
        return this.toppingsModel.findByIdAndDelete(id);
    }
    
}