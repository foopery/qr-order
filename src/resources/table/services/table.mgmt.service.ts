import { Injectable } from '@nestjs/common';
import { TableCommonService } from './table.common.service';
import { TableMgmtRepository } from '../repositories/table.mgmt.repository';

@Injectable()
export class TableMgmtService extends TableCommonService {
    constructor(private mgmtRepository: TableMgmtRepository) {
        super(mgmtRepository);
    }
}
