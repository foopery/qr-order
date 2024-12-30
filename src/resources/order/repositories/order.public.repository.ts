import { Injectable } from '@nestjs/common';
import { OrderCommonRepository } from './order.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class OrderPublicRepository extends OrderCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }

    async create(data: Prisma.OrderCreateInput | Prisma.OrderUncheckedCreateInput) {
        return this.prisma.order.create({ data });
    }
}
