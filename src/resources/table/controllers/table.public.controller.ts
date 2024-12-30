import { Controller } from '@nestjs/common';
import { TablePublicService } from '../services/table.public.service';

@Controller('tables')
export class TablePublicController {
    constructor(private publicService: TablePublicService) {}
}
