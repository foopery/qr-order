import { Injectable } from '@nestjs/common';
import { ProductOptionCommonService } from './product-option.common.service';
import { ProductOptionMgmtRepository } from '../repositories/product-option.mgmt.repository';

@Injectable()
export class ProductOptionMgmtService extends ProductOptionCommonService {
    constructor(private mgmtRepository: ProductOptionMgmtRepository) {
        super(mgmtRepository);
    }
}
