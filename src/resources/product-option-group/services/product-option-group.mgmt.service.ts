import { Injectable } from '@nestjs/common';
import { ProductOptionGroupCommonService } from './product-option-group.common.service';
import { ProductOptionGroupMgmtRepository } from '../repositories/product-option-group.mgmt.repository';

@Injectable()
export class ProductOptionGroupMgmtService extends ProductOptionGroupCommonService {
    constructor(private mgmtRepository: ProductOptionGroupMgmtRepository) {
        super(mgmtRepository);
    }
}
