import { Product } from '../models/product.model';
import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';
import { PaginationDto } from '../../../common/dto/pagination.dto';

export class ProductMgmtFindListDto extends IntersectionType(
    // 페이지네이션 필수 옵션
    PaginationDto,

    // 필수
    PickType(Product, [] as const),

    // 선택
    PickType(PartialType(Product), [] as const),
) {}
