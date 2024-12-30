import { Injectable } from '@nestjs/common';
import { OrderCommonRepository } from '../repositories/order.common.repository';

@Injectable()
export class OrderCommonService {
    constructor(private commonRepository: OrderCommonRepository) {}
}
