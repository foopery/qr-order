import { Injectable } from '@nestjs/common';
import { OrderCommonService } from './order.common.service';
import { OrderMgmtRepository } from '../repositories/order.mgmt.repository';

@Injectable()
export class OrderMgmtService extends OrderCommonService {
    constructor(private mgmtRepository: OrderMgmtRepository) {
        super(mgmtRepository);
    }
}
