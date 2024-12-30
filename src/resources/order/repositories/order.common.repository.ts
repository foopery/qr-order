import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class OrderCommonRepository {
    constructor(protected prisma: PrismaRepository) {}
}
