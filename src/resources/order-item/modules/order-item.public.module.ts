import { Module } from '@nestjs/common';
import { OrderItemPublicController } from '../controllers/order-item.public.controller';
import { OrderItemPublicService } from '../services/order-item.public.service';
import { OrderItemPublicRepository } from '../repositories/order-item.public.repository';

@Module({
    controllers: [OrderItemPublicController],
    providers: [OrderItemPublicService, OrderItemPublicRepository],
    exports: [OrderItemPublicService],
})
export class OrderItemPublicModule {}
