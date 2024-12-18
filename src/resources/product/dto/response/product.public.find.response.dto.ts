import { ApiResponseDto } from '@common/dto/response.dto';
import { AutoApiSchema } from '@common/decorators/auto.api-schema.decorator';
import { OmitType } from '@nestjs/swagger';
import { Product } from '@resources/product/models/product.model';

export class ProductPublicFindResponseDto extends ApiResponseDto {
    data: Data;
}

@AutoApiSchema()
export class Data extends OmitType(Product, []) {}
