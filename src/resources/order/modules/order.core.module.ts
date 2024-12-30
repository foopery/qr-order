import { Module } from '@nestjs/common';
import { OrderCoreController } from '../controllers/order.core.controller';
import { OrderCoreService } from '../services/order.core.service';
import { OrderCoreRepository } from '../repositories/order.core.repository';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [OrderCoreController],
    providers: [OrderCoreService, OrderCoreRepository],
    exports: [OrderCoreService],
})
export class OrderCoreModule {}
