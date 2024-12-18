import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class ProductOptionCommonRepository {
    constructor(protected prisma: PrismaRepository) {}
}
