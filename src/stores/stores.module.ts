import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Stores, StoresSchema } from './entities/store.entity';
import { StoresRepo } from './stores.repository';

@Module({
  imports : [
    MongooseModule.forFeature([{ name: Stores.name, schema: StoresSchema }]),
  ],
  controllers: [StoresController],
  providers: [StoresService,StoresRepo]
})
export class StoresModule {}
