import { Injectable } from '@nestjs/common';
import { OrderItemOptionCommonRepository } from '../repositories/order-item-option.common.repository';

@Injectable()
export class OrderItemOptionCommonService {
    constructor(private commonRepository: OrderItemOptionCommonRepository) {}
}
