import { Injectable } from '@nestjs/common';
import { OrderItemOptionCommonService } from './order-item-option.common.service';
import { OrderItemOptionMgmtRepository } from '../repositories/order-item-option.mgmt.repository';

@Injectable()
export class OrderItemOptionMgmtService extends OrderItemOptionCommonService {
    constructor(private mgmtRepository: OrderItemOptionMgmtRepository) {
        super(mgmtRepository);
    }
}
