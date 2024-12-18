import { ApiResponseDto } from '@common/dto/response.dto';
import { AutoApiSchema } from '@common/decorators/auto.api-schema.decorator';
import { OmitType } from '@nestjs/swagger';
import { Product } from '@resources/product/models/product.model';
import { ProductOptionGroup } from '@resources/product-option-group/models/product-option-group.model';
import { ProductOption } from '@resources/product-option/models/product-option.model';

export class ProductPublicFindResponseDto extends ApiResponseDto {
    data: Data;
}

@AutoApiSchema()
export class Data extends OmitType(Product, []) {
    optionGroups: WithOptionGroups[];
}

@AutoApiSchema()
export class WithOptionGroups extends OmitType(ProductOptionGroup, []) {
    options: WithOptions[];
}

@AutoApiSchema()
export class WithOptions extends OmitType(ProductOption, []) {}
