import { Injectable } from '@nestjs/common';
import { CartRepo } from './cart.repository';
import { Cart } from './entities/cart.entity';

@Injectable()
export class CartService {

  constructor(
    private readonly cartRepo : CartRepo
  ) { }

  async create(cart: Cart) {
    return this.cartRepo.create(cart);
  }

  async findAll() {
    return this.cartRepo.findAll();
  }

  async findOne(id: string) {
    return this.cartRepo.findOne(id);
  }

  async update(id: string, cart : Cart) {
    return this.cartRepo.update(id,cart);
  }

  async remove(id: string) {
    return this.cartRepo.remove(id);
  }
}
