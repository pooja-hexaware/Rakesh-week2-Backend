import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Menu, MenuDocument } from "./entities/menu.entity";

@Injectable()
export class MenuRepo{

    constructor(
        @InjectModel(Menu.name)
        private readonly menuModel: Model<MenuDocument>,
    ){ }

    async create(data) : Promise<Menu> {
        return new this.menuModel(data).save();
    }

    async findAll() : Promise<Menu[]> {
        return this.menuModel.find({}).exec();
    }

    async findOne(id) : Promise<Menu> {
        return this.menuModel.findOne(id);
    }

    async update(_id,data) : Promise<Menu> {
        return this.menuModel.findOneAndUpdate(_id, data);
    }

    async remove(id) : Promise<Menu> {
        return this.menuModel.findByIdAndDelete(id);
    }
    
}