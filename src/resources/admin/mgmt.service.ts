import { Injectable } from '@nestjs/common';
import { CommonService } from '@resources/admin/common.service';
import { MgmtRepository } from '@resources/admin/mgmt.repository';

@Injectable()
export class MgmtService extends CommonService {
    constructor(protected repository: MgmtRepository) {
        super(repository);
    }
}
