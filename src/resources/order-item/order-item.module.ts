import { Module } from '@nestjs/common';
import { OrderItemMgmtModule } from './modules/order-item.mgmt.module';
import { OrderItemPublicModule } from './modules/order-item.public.module';
import { OrderItemCoreModule } from './modules/order-item.core.module';

@Module({
    imports: [OrderItemPublicModule, OrderItemMgmtModule, OrderItemCoreModule],
})
export class OrderItemModule {}
