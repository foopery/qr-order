import { Injectable } from '@nestjs/common';
import { TableCommonRepository } from '../repositories/table.common.repository';

@Injectable()
export class TableCommonService {
    constructor(private commonRepository: TableCommonRepository) {}
}
