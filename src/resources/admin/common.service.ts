import { Injectable } from '@nestjs/common';
import { Prisma } from '@resources/admin/prisma';
import { CommonRepository } from '@resources/admin/common.repository';

@Injectable()
export class CommonService {
    constructor(protected repository: CommonRepository) {}
}
