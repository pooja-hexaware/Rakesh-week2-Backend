import { Injectable } from '@nestjs/common';
import { Toppings } from './entities/topping.entity';
import { ToppingsRepo } from './toppings.repository';

@Injectable()
export class ToppingsService {

  constructor(
    private readonly toppingsRepo : ToppingsRepo
  ) { }  

  async create( toppings : Toppings) {
    return this.toppingsRepo.create(toppings);
  }

  async findAll() {
    return this.toppingsRepo.findAll();
  }

  async findOne(id: string) {
    return this.toppingsRepo.findOne(id);
  }

  async update(id: string, toppings: Toppings) {
    return this.toppingsRepo.update(id,toppings);
  }

  async remove(id: string) {
    return this.toppingsRepo.remove(id);
  }
}
