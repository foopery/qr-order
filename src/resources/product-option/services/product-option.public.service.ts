import { Injectable } from '@nestjs/common';
import { ProductOptionCommonService } from './product-option.common.service';
import { ProductOptionPublicRepository } from '../repositories/product-option.public.repository';

@Injectable()
export class ProductOptionPublicService extends ProductOptionCommonService {
    constructor(private publicRepository: ProductOptionPublicRepository) {
        super(publicRepository);
    }
}
