import { Module } from '@nestjs/common';
import { ProductMgmtController } from '../controllers/product.mgmt.controller';
import { ProductMgmtService } from '../services/product.mgmt.service';
import { ProductMgmtRepository } from '../repositories/product.mgmt.repository';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ProductMgmtController],
    providers: [ProductMgmtService, ProductMgmtRepository],
    exports: [ProductMgmtService],
})
export class ProductMgmtModule {}
