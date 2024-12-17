import { Module } from '@nestjs/common';
import { ProductCoreController } from '../controllers/product.core.controller';
import { ProductCoreService } from '../services/product.core.service';
import { ProductCoreRepository } from '../repositories/product.core.repository';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ProductCoreController],
    providers: [ProductCoreService, ProductCoreRepository],
    exports: [ProductCoreService],
})
export class ProductCoreModule {}
