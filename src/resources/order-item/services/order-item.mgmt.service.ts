import { Injectable } from '@nestjs/common';
import { OrderItemCommonService } from './order-item.common.service';
import { OrderItemMgmtRepository } from '../repositories/order-item.mgmt.repository';

@Injectable()
export class OrderItemMgmtService extends OrderItemCommonService {
    constructor(private mgmtRepository: OrderItemMgmtRepository) {
        super(mgmtRepository);
    }
}
