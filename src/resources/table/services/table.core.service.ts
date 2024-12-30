import { Injectable } from '@nestjs/common';
import { TableCommonService } from './table.common.service';
import { TableCoreRepository } from '../repositories/table.core.repository';

@Injectable()
export class TableCoreService extends TableCommonService {
    constructor(private coreRepository: TableCoreRepository) {
        super(coreRepository);
    }
}
