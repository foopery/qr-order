import { Injectable } from '@nestjs/common';
import { OrderCommonService } from './order.common.service';
import { OrderCoreRepository } from '../repositories/order.core.repository';

@Injectable()
export class OrderCoreService extends OrderCommonService {
    constructor(private coreRepository: OrderCoreRepository) {
        super(coreRepository);
    }
}
