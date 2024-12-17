import { Injectable } from '@nestjs/common';
import { Prisma } from '@resources/admin/prisma';
import { CommonRepository } from '@resources/admin/common.repository';

@Injectable()
export class MgmtRepository extends CommonRepository {
    constructor(protected prisma: Prisma) {
        super(prisma);
    }
}

export enum Tests {
    /** 테스트 */
    Aaaa,
    /** 테스트111 */
    Bbb,
    /** 테스트222 */
    Ccc,
}
