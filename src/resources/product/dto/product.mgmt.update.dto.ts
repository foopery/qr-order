import { Product } from '../models/product.model';
import { IntersectionType, PartialType, PickType } from '@nestjs/swagger';

export class ProductMgmtUpdateDto extends IntersectionType(
    // 필수
    PickType(Product, [] as const),
    
    // 선택
    PickType(PartialType(Product), [] as const),
) {}
