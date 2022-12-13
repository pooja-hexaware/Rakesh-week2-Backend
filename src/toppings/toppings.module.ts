import { Module } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { ToppingsController } from './toppings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Toppings, ToppingsSchema } from './entities/topping.entity';
import { ToppingsRepo } from './toppings.repository';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: Toppings.name, schema: ToppingsSchema }]),
  ],
  controllers: [ToppingsController],
  providers: [ToppingsService,ToppingsRepo]
})
export class ToppingsModule {}
