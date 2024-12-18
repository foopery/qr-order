import { Module } from '@nestjs/common';
import { ProductOptionPublicController } from '../controllers/product-option.public.controller';
import { ProductOptionPublicService } from '../services/product-option.public.service';
import { ProductOptionPublicRepository } from '../repositories/product-option.public.repository';

@Module({
    controllers: [ProductOptionPublicController],
    providers: [ProductOptionPublicService, ProductOptionPublicRepository],
    exports: [ProductOptionPublicService],
})
export class ProductOptionPublicModule {}
