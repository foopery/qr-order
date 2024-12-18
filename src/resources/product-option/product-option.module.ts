import { Module } from '@nestjs/common';
import { ProductOptionMgmtModule } from './modules/product-option.mgmt.module';
import { ProductOptionPublicModule } from './modules/product-option.public.module';
import { ProductOptionCoreModule } from './modules/product-option.core.module';

@Module({
    imports: [ProductOptionPublicModule, ProductOptionMgmtModule, ProductOptionCoreModule],
})
export class ProductOptionModule {}
