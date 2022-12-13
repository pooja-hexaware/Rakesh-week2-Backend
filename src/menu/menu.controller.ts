import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Res() res, @Body() menuObject:Menu) {
    const result = this.menuService.create(menuObject);
    if(!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    return this.menuService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const menuObject = this.menuService.findOne(id);
    if(!menuObject) return null;
    return res.status(HttpStatus.OK).json(menuObject);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedMenuObject : Menu) {
    const result = this.menuService.update(id, updatedMenuObject);
    if(!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.menuService.remove(id);
  }
}
