import { Injectable } from '@nestjs/common';
import { OrderItemOptionCommonRepository } from './order-item-option.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class OrderItemOptionPublicRepository extends OrderItemOptionCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
