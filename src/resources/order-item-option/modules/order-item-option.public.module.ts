import { Module } from '@nestjs/common';
import { OrderItemOptionPublicController } from '../controllers/order-item-option.public.controller';
import { OrderItemOptionPublicService } from '../services/order-item-option.public.service';
import { OrderItemOptionPublicRepository } from '../repositories/order-item-option.public.repository';

@Module({
    controllers: [OrderItemOptionPublicController],
    providers: [OrderItemOptionPublicService, OrderItemOptionPublicRepository],
    exports: [OrderItemOptionPublicService],
})
export class OrderItemOptionPublicModule {}
