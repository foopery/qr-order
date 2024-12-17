import { Product } from '../models/product.model';
import { ApiProperty, IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { PaginationDto } from '../../../common/dto/pagination.dto';
import { IsEnum, IsOptional } from 'class-validator';
import { ProductPublicFindListSort } from '@resources/product/enums/product.find-list.sort';

export class ProductPublicFindListDto extends IntersectionType(
    // 페이지네이션 필수 옵션
    PaginationDto,

    // 필수
    PickType(Product, [] as const),

    // 선택
    PickType(PartialType(Product), [] as const),
) {
    @ApiProperty({ description: '정렬', enum: ProductPublicFindListSort })
    @IsOptional()
    @IsEnum(ProductPublicFindListSort)
    sort?: ProductPublicFindListSort;
}
