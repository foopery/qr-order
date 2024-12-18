import { Injectable } from '@nestjs/common';
import { ProductOptionGroupCommonRepository } from '../repositories/product-option-group.common.repository';

@Injectable()
export class ProductOptionGroupCommonService {
    constructor(private commonRepository: ProductOptionGroupCommonRepository) {}
}
