import { ApiResponseDtoWithMeta } from '@common/dto/response.dto';
import { OmitType } from '@nestjs/swagger';
import { Product } from '@resources/product/models/product.model';

export class ProductPublicFindListResponseDto extends ApiResponseDtoWithMeta {
    data: Data[];
}

export class Data extends OmitType(Product, []) {}
