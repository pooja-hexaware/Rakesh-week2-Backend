import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { Stores } from './entities/store.entity';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  async create(@Res() res, @Body() storeObject:Stores) {
    const result = this.storesService.create(storeObject);
    if(!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const storesObject = this.storesService.findOne(id);
    if(!storesObject) return null;
    return res.status(HttpStatus.OK).json(storesObject);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedStoresObject : Stores) {
    const result =  this.storesService.update(id, updatedStoresObject);
    if(!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.storesService.remove(id);
  }
}
