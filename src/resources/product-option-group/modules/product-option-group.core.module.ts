import { Module } from '@nestjs/common';
import { ProductOptionGroupCoreController } from '../controllers/product-option-group.core.controller';
import { ProductOptionGroupCoreService } from '../services/product-option-group.core.service';
import { ProductOptionGroupCoreRepository } from '../repositories/product-option-group.core.repository';

@Module({
    controllers: [ProductOptionGroupCoreController],
    providers: [ProductOptionGroupCoreService, ProductOptionGroupCoreRepository],
    exports: [ProductOptionGroupCoreService],
})
export class ProductOptionGroupCoreModule {}
