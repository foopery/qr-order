import { Controller } from '@nestjs/common';
import { TableMgmtService } from '../services/table.mgmt.service';

@Controller('management/tables')
export class TableMgmtController {
    constructor(private mgmtService: TableMgmtService) {}
}
