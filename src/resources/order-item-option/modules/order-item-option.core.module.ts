import { Module } from '@nestjs/common';
import { OrderItemOptionCoreController } from '../controllers/order-item-option.core.controller';
import { OrderItemOptionCoreService } from '../services/order-item-option.core.service';
import { OrderItemOptionCoreRepository } from '../repositories/order-item-option.core.repository';

@Module({
    controllers: [OrderItemOptionCoreController],
    providers: [OrderItemOptionCoreService, OrderItemOptionCoreRepository],
    exports: [OrderItemOptionCoreService],
})
export class OrderItemOptionCoreModule {}
