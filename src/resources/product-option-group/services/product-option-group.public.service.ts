import { Injectable } from '@nestjs/common';
import { ProductOptionGroupCommonService } from './product-option-group.common.service';
import { ProductOptionGroupPublicRepository } from '../repositories/product-option-group.public.repository';

@Injectable()
export class ProductOptionGroupPublicService extends ProductOptionGroupCommonService {
    constructor(private publicRepository: ProductOptionGroupPublicRepository) {
        super(publicRepository);
    }
}
