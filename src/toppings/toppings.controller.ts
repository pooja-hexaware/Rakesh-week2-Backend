import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { Toppings } from './entities/topping.entity';
import { ToppingsService } from './toppings.service';

@Controller('toppings')
export class ToppingsController {
  constructor(private readonly toppingsService: ToppingsService) {}

  @Post()
  async create(@Res() res, @Body() toppingsObject:Toppings) {
    const result = this.toppingsService.create(toppingsObject);
    if(!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    return this.toppingsService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const toppingsObject = this.toppingsService.findOne(id);
    if(!toppingsObject) return null;
    return res.status(HttpStatus.OK).json(toppingsObject);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedToppingsObject : Toppings) {
    const result = this.toppingsService.update(id, updatedToppingsObject);
    if(!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.toppingsService.remove(id);
  }
}
