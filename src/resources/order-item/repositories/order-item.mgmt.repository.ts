import { Injectable } from '@nestjs/common';
import { OrderItemCommonRepository } from './order-item.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class OrderItemMgmtRepository extends OrderItemCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
