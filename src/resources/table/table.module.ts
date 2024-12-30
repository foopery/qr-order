import { Module } from '@nestjs/common';
import { TableMgmtModule } from './modules/table.mgmt.module';
import { TablePublicModule } from './modules/table.public.module';
import { TableCoreModule } from './modules/table.core.module';

@Module({
    imports: [TablePublicModule, TableMgmtModule, TableCoreModule],
})
export class TableModule {}
