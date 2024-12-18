import { Module } from '@nestjs/common';
import { ProductOptionGroupMgmtController } from '../controllers/product-option-group.mgmt.controller';
import { ProductOptionGroupMgmtService } from '../services/product-option-group.mgmt.service';
import { ProductOptionGroupMgmtRepository } from '../repositories/product-option-group.mgmt.repository';

@Module({
    controllers: [ProductOptionGroupMgmtController],
    providers: [ProductOptionGroupMgmtService, ProductOptionGroupMgmtRepository],
    exports: [ProductOptionGroupMgmtService],
})
export class ProductOptionGroupMgmtModule {}
