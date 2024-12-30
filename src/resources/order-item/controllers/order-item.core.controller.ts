import { Controller } from '@nestjs/common';
import { OrderItemCoreService } from '../services/order-item.core.service';

@Controller('core/order-items')
export class OrderItemCoreController {
    constructor(private coreService: OrderItemCoreService) {}
}
