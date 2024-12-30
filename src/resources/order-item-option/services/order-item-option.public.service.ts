import { Injectable } from '@nestjs/common';
import { OrderItemOptionCommonService } from './order-item-option.common.service';
import { OrderItemOptionPublicRepository } from '../repositories/order-item-option.public.repository';

@Injectable()
export class OrderItemOptionPublicService extends OrderItemOptionCommonService {
    constructor(private publicRepository: OrderItemOptionPublicRepository) {
        super(publicRepository);
    }
}
