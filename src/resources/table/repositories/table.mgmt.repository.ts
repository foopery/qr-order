import { Injectable } from '@nestjs/common';
import { TableCommonRepository } from './table.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';

@Injectable()
export class TableMgmtRepository extends TableCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }
}
