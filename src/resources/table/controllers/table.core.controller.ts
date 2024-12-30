import { Controller } from '@nestjs/common';
import { TableCoreService } from '../services/table.core.service';

@Controller('core/tables')
export class TableCoreController {
    constructor(private coreService: TableCoreService) {}
}
