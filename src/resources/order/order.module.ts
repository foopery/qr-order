import { Module } from '@nestjs/common';
import { OrderMgmtModule } from './modules/order.mgmt.module';
import { OrderPublicModule } from './modules/order.public.module';
import { OrderCoreModule } from './modules/order.core.module';

@Module({
    imports: [OrderPublicModule, OrderMgmtModule, OrderCoreModule],
})
export class OrderModule {}
