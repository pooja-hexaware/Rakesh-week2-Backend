import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart } from './entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Res() res, @Body() cartObject:Cart) {
    const result = this.cartService.create(cartObject);
    if(!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const cartObject = this.cartService.findOne(id);
    if(!cartObject) return null;
    return res.status(HttpStatus.OK).json(cartObject);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedCartObject : Cart) {
    const result = this.cartService.update(id, updatedCartObject);
    if(!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
