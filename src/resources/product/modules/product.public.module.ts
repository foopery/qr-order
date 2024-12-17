import { Module } from '@nestjs/common';
import { ProductPublicController } from '../controllers/product.public.controller';
import { ProductPublicService } from '../services/product.public.service';
import { ProductPublicRepository } from '../repositories/product.public.repository';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ProductPublicController],
    providers: [ProductPublicService, ProductPublicRepository],
    exports: [ProductPublicService],
})
export class ProductPublicModule {}
