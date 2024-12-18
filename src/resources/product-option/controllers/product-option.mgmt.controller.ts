import { Controller } from '@nestjs/common';
import { ProductOptionMgmtService } from '../services/product-option.mgmt.service';

@Controller('management/product-options')
export class ProductOptionMgmtController {
    constructor(private mgmtService: ProductOptionMgmtService) {}
}
