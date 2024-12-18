import { Controller } from '@nestjs/common';
import { ProductOptionGroupMgmtService } from '../services/product-option-group.mgmt.service';

@Controller('management/product-option-groups')
export class ProductOptionGroupMgmtController {
    constructor(private mgmtService: ProductOptionGroupMgmtService) {}
}
