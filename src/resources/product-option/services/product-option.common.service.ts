import { Injectable } from '@nestjs/common';
import { ProductOptionCommonRepository } from '../repositories/product-option.common.repository';

@Injectable()
export class ProductOptionCommonService {
    constructor(private commonRepository: ProductOptionCommonRepository) {}
}
