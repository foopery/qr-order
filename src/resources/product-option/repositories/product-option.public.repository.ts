import { Injectable } from '@nestjs/common';
import { ProductOptionCommonRepository } from './product-option.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class ProductOptionPublicRepository extends ProductOptionCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
