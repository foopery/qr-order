import { Controller } from '@nestjs/common';
import { ProductOptionCoreService } from '../services/product-option.core.service';

@Controller('core/product-options')
export class ProductOptionCoreController {
    constructor(private coreService: ProductOptionCoreService) {}
}
