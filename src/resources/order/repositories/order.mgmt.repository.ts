import { Injectable } from '@nestjs/common';
import { OrderCommonRepository } from './order.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class OrderMgmtRepository extends OrderCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
