import { Injectable } from '@nestjs/common';
import { Menu } from './entities/menu.entity';
import { MenuRepo } from './menu.repository';


@Injectable()
export class MenuService {

  constructor(
    private readonly menuRepo : MenuRepo
  ) { }

  async create(menu : Menu) {
    return this.menuRepo.create(menu);
  }

  async findAll() {
    return this.menuRepo.findAll();
  }

  async findOne(id: string) {
    return this.menuRepo.findOne(id);
  }

  async update(id: string, menu : Menu) {
    return this.menuRepo.update(id,menu);
  }

  async remove(id: string) {
    return this.menuRepo.remove(id);
  }
}
