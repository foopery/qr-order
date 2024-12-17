import { Injectable } from '@nestjs/common';
import { ProductCommonService } from './product.common.service';
import { ProductPublicRepository } from '../repositories/product.public.repository';
import { ProductPublicFindListDto } from '@resources/product/dto/product.public.find-list.dto';

@Injectable()
export class ProductPublicService extends ProductCommonService {
    constructor(private publicRepository: ProductPublicRepository) {
        super(publicRepository);
    }

    async findList(data: ProductPublicFindListDto) {
        return this.publicRepository.findList(data);
    }
}
