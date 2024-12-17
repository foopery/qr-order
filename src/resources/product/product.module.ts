import { Module } from '@nestjs/common';
import { ProductMgmtModule } from './modules/product.mgmt.module';
import { ProductPublicModule } from './modules/product.public.module';
import { ProductCoreModule } from './modules/product.core.module';

@Module({
    imports: [ProductPublicModule, ProductMgmtModule, ProductCoreModule],
})
export class ProductModule {}
