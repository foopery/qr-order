import { Injectable } from '@nestjs/common';
import { ProductCommonRepository } from './product.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class ProductCoreRepository extends ProductCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
