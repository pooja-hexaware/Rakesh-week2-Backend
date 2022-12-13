import { Injectable } from '@nestjs/common';
import { Stores } from './entities/store.entity';
import { StoresRepo } from './stores.repository';

@Injectable()
export class StoresService {

  constructor(
    private readonly storesRepo : StoresRepo
  ) { }

  async create(stores : Stores) {
    return this.storesRepo.create(stores);
  }

  async findAll() {
    return this.storesRepo.findAll();
  }

  async findOne(id: string) {
    return this.storesRepo.findOne(id);
  }

  async update(id: string, updateStoresObject: Stores) {
    return this.storesRepo.update(id,updateStoresObject);
  }

  async remove(id: string) {
    return this.storesRepo.remove(id);
  }
}
