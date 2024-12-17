import { Controller } from '@nestjs/common';
import { ProductMgmtService } from '../services/product.mgmt.service';

@Controller('management/products')
export class ProductMgmtController {
    constructor(private mgmtService: ProductMgmtService) {}
}
