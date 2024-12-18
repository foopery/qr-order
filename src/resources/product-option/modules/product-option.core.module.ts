import { Module } from '@nestjs/common';
import { ProductOptionCoreController } from '../controllers/product-option.core.controller';
import { ProductOptionCoreService } from '../services/product-option.core.service';
import { ProductOptionCoreRepository } from '../repositories/product-option.core.repository';

@Module({
    controllers: [ProductOptionCoreController],
    providers: [ProductOptionCoreService, ProductOptionCoreRepository],
    exports: [ProductOptionCoreService],
})
export class ProductOptionCoreModule {}
