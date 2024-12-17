import { Controller } from '@nestjs/common';
import { ProductCoreService } from '../services/product.core.service';

@Controller('core/products')
export class ProductCoreController {
    constructor(private coreService: ProductCoreService) {}
}
