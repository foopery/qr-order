import { Injectable } from '@nestjs/common';
import { OrderItemCommonService } from './order-item.common.service';
import { OrderItemCoreRepository } from '../repositories/order-item.core.repository';

@Injectable()
export class OrderItemCoreService extends OrderItemCommonService {
    constructor(private coreRepository: OrderItemCoreRepository) {
        super(coreRepository);
    }
}
