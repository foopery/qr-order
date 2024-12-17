import { Injectable } from '@nestjs/common';
import { ProductCommonRepository } from '../repositories/product.common.repository';

@Injectable()
export class ProductCommonService {
    constructor(private commonRepository: ProductCommonRepository) {}
}
