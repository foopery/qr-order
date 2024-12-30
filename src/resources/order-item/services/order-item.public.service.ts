import { Injectable } from '@nestjs/common';
import { OrderItemCommonService } from './order-item.common.service';
import { OrderItemPublicRepository } from '../repositories/order-item.public.repository';

@Injectable()
export class OrderItemPublicService extends OrderItemCommonService {
    constructor(private publicRepository: OrderItemPublicRepository) {
        super(publicRepository);
    }
}
