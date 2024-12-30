import { Module } from '@nestjs/common';
import { OrderItemOptionMgmtModule } from './modules/order-item-option.mgmt.module';
import { OrderItemOptionPublicModule } from './modules/order-item-option.public.module';
import { OrderItemOptionCoreModule } from './modules/order-item-option.core.module';

@Module({
    imports: [OrderItemOptionPublicModule, OrderItemOptionMgmtModule, OrderItemOptionCoreModule],
})
export class OrderItemOptionModule {}
