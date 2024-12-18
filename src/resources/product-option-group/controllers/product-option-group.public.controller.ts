import { Controller } from '@nestjs/common';
import { ProductOptionGroupPublicService } from '../services/product-option-group.public.service';

@Controller('product-option-groups')
export class ProductOptionGroupPublicController {
    constructor(private publicService: ProductOptionGroupPublicService) {}
}
