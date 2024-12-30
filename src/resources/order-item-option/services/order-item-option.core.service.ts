import { Injectable } from '@nestjs/common';
import { OrderItemOptionCommonService } from './order-item-option.common.service';
import { OrderItemOptionCoreRepository } from '../repositories/order-item-option.core.repository';

@Injectable()
export class OrderItemOptionCoreService extends OrderItemOptionCommonService {
    constructor(private coreRepository: OrderItemOptionCoreRepository) {
        super(coreRepository);
    }
}
