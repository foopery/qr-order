import { Module } from '@nestjs/common';
import { OrderItemOptionMgmtController } from '../controllers/order-item-option.mgmt.controller';
import { OrderItemOptionMgmtService } from '../services/order-item-option.mgmt.service';
import { OrderItemOptionMgmtRepository } from '../repositories/order-item-option.mgmt.repository';

@Module({
    controllers: [OrderItemOptionMgmtController],
    providers: [OrderItemOptionMgmtService, OrderItemOptionMgmtRepository],
    exports: [OrderItemOptionMgmtService],
})
export class OrderItemOptionMgmtModule {}
