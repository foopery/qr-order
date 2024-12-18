import { Injectable } from '@nestjs/common';
import { ProductOptionCommonService } from './product-option.common.service';
import { ProductOptionCoreRepository } from '../repositories/product-option.core.repository';

@Injectable()
export class ProductOptionCoreService extends ProductOptionCommonService {
    constructor(private coreRepository: ProductOptionCoreRepository) {
        super(coreRepository);
    }
}
