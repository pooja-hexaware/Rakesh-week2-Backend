import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CartModule } from './cart/cart.module';
import { StoresModule } from './stores/stores.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ToppingsModule } from './toppings/toppings.module';

@Module({  
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  }), MongooseModule.forRoot(process.env.MONGODB_URL, {
    autoCreate: true,
  }),
  MenuModule, CartModule, StoresModule, ToppingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
