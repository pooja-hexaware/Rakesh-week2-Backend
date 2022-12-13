import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Stores, StoresDocument } from "./entities/store.entity";

@Injectable()
export class StoresRepo{

    constructor(
        @InjectModel(Stores.name)
        private readonly storesModel: Model<StoresDocument>,
    ){ }

    async create(data) : Promise<Stores> {
        return new this.storesModel(data).save();
    }

    async findAll() : Promise<Stores[]> {
        return this.storesModel.find({}).exec();
    }

    async findOne(id) : Promise<Stores> {
        return this.storesModel.findOne(id);
    }

    async update(_id,data) : Promise<Stores> {
        return this.storesModel.findOneAndUpdate(_id, data);
    }

    async remove(id) : Promise<Stores> {
        return this.storesModel.findByIdAndDelete(id);
    }
    
}