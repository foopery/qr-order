import { Module } from '@nestjs/common';
import { ProductOptionMgmtController } from '../controllers/product-option.mgmt.controller';
import { ProductOptionMgmtService } from '../services/product-option.mgmt.service';
import { ProductOptionMgmtRepository } from '../repositories/product-option.mgmt.repository';

@Module({
    controllers: [ProductOptionMgmtController],
    providers: [ProductOptionMgmtService, ProductOptionMgmtRepository],
    exports: [ProductOptionMgmtService],
})
export class ProductOptionMgmtModule {}
