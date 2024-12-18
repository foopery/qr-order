import { Module } from '@nestjs/common';
import { ProductOptionGroupMgmtModule } from './modules/product-option-group.mgmt.module';
import { ProductOptionGroupPublicModule } from './modules/product-option-group.public.module';
import { ProductOptionGroupCoreModule } from './modules/product-option-group.core.module';

@Module({
    imports: [ProductOptionGroupPublicModule, ProductOptionGroupMgmtModule, ProductOptionGroupCoreModule],
})
export class ProductOptionGroupModule {}
