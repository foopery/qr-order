import { ApiResponseDtoWithMeta } from '@common/dto/response.dto';
import { OmitType } from '@nestjs/swagger';
import { Product } from '@resources/product/models/product.model';
import { AutoApiSchema } from '@common/decorators/auto.api-schema.decorator';

export class ProductPublicFindListResponseDto extends ApiResponseDtoWithMeta {
    data: Data[];
}

@AutoApiSchema()
export class Data extends OmitType(Product, []) {}
