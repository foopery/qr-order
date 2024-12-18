import { Injectable } from '@nestjs/common';
import { ProductOptionGroupCommonService } from './product-option-group.common.service';
import { ProductOptionGroupCoreRepository } from '../repositories/product-option-group.core.repository';

@Injectable()
export class ProductOptionGroupCoreService extends ProductOptionGroupCommonService {
    constructor(private coreRepository: ProductOptionGroupCoreRepository) {
        super(coreRepository);
    }
}
