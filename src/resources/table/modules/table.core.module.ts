import { Module } from '@nestjs/common';
import { TableCoreController } from '../controllers/table.core.controller';
import { TableCoreService } from '../services/table.core.service';
import { TableCoreRepository } from '../repositories/table.core.repository';

@Module({
    controllers: [TableCoreController],
    providers: [TableCoreService, TableCoreRepository],
    exports: [TableCoreService],
})
export class TableCoreModule {}
