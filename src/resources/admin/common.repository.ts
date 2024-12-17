import { Injectable } from '@nestjs/common';
import { Prisma } from '@resources/admin/prisma';

@Injectable()
export class CommonRepository {
    constructor(protected prisma: Prisma) {}
}
