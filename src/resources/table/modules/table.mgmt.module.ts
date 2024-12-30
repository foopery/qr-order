import { Module } from '@nestjs/common';
import { TableMgmtController } from '../controllers/table.mgmt.controller';
import { TableMgmtService } from '../services/table.mgmt.service';
import { TableMgmtRepository } from '../repositories/table.mgmt.repository';

@Module({
    controllers: [TableMgmtController],
    providers: [TableMgmtService, TableMgmtRepository],
    exports: [TableMgmtService],
})
export class TableMgmtModule {}
