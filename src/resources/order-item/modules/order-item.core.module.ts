import { Module } from '@nestjs/common';
import { OrderItemCoreController } from '../controllers/order-item.core.controller';
import { OrderItemCoreService } from '../services/order-item.core.service';
import { OrderItemCoreRepository } from '../repositories/order-item.core.repository';

@Module({
    controllers: [OrderItemCoreController],
    providers: [OrderItemCoreService, OrderItemCoreRepository],
    exports: [OrderItemCoreService],
})
export class OrderItemCoreModule {}
