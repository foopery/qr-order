import { Module } from '@nestjs/common';
import { OrderMgmtController } from '../controllers/order.mgmt.controller';
import { OrderMgmtService } from '../services/order.mgmt.service';
import { OrderMgmtRepository } from '../repositories/order.mgmt.repository';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [OrderMgmtController],
    providers: [OrderMgmtService, OrderMgmtRepository],
    exports: [OrderMgmtService],
})
export class OrderMgmtModule {}
