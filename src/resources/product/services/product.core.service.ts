import { Injectable } from '@nestjs/common';
import { ProductCommonService } from './product.common.service';
import { ProductCoreRepository } from '../repositories/product.core.repository';

@Injectable()
export class ProductCoreService extends ProductCommonService {
    constructor(private coreRepository: ProductCoreRepository) {
        super(coreRepository);
    }
}
