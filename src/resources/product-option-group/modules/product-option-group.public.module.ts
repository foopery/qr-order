import { Module } from '@nestjs/common';
import { ProductOptionGroupPublicController } from '../controllers/product-option-group.public.controller';
import { ProductOptionGroupPublicService } from '../services/product-option-group.public.service';
import { ProductOptionGroupPublicRepository } from '../repositories/product-option-group.public.repository';

@Module({
    controllers: [ProductOptionGroupPublicController],
    providers: [ProductOptionGroupPublicService, ProductOptionGroupPublicRepository],
    exports: [ProductOptionGroupPublicService],
})
export class ProductOptionGroupPublicModule {}
