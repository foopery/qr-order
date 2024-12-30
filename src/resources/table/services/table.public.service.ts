import { Injectable } from '@nestjs/common';
import { TableCommonService } from './table.common.service';
import { TablePublicRepository } from '../repositories/table.public.repository';

@Injectable()
export class TablePublicService extends TableCommonService {
    constructor(private publicRepository: TablePublicRepository) {
        super(publicRepository);
    }
}
