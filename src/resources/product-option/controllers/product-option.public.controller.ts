import { Controller } from '@nestjs/common';
import { ProductOptionPublicService } from '../services/product-option.public.service';

@Controller('product-options')
export class ProductOptionPublicController {
    constructor(private publicService: ProductOptionPublicService) {}
}
