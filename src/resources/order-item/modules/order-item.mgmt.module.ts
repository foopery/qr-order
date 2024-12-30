import { Module } from '@nestjs/common';
import { OrderItemMgmtController } from '../controllers/order-item.mgmt.controller';
import { OrderItemMgmtService } from '../services/order-item.mgmt.service';
import { OrderItemMgmtRepository } from '../repositories/order-item.mgmt.repository';

@Module({
    controllers: [OrderItemMgmtController],
    providers: [OrderItemMgmtService, OrderItemMgmtRepository],
    exports: [OrderItemMgmtService],
})
export class OrderItemMgmtModule {}
