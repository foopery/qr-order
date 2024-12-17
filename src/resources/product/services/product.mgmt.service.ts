import { Injectable } from '@nestjs/common';
import { ProductCommonService } from './product.common.service';
import { ProductMgmtRepository } from '../repositories/product.mgmt.repository';

@Injectable()
export class ProductMgmtService extends ProductCommonService {
    constructor(private mgmtRepository: ProductMgmtRepository) {
        super(mgmtRepository);
    }
}
