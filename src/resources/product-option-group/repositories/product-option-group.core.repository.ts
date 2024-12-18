import { Injectable } from '@nestjs/common';
import { ProductOptionGroupCommonRepository } from './product-option-group.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class ProductOptionGroupCoreRepository extends ProductOptionGroupCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
