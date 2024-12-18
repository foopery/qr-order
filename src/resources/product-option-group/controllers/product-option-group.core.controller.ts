import { Controller } from '@nestjs/common';
import { ProductOptionGroupCoreService } from '../services/product-option-group.core.service';

@Controller('core/product-option-groups')
export class ProductOptionGroupCoreController {
    constructor(private coreService: ProductOptionGroupCoreService) {}
}
