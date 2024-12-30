import { Injectable } from '@nestjs/common';
import { OrderItemCommonRepository } from '../repositories/order-item.common.repository';

@Injectable()
export class OrderItemCommonService {
    constructor(private commonRepository: OrderItemCommonRepository) {}
}
