import { Controller } from '@nestjs/common';
import { OrderCoreService } from '../services/order.core.service';

@Controller('core/orders')
export class OrderCoreController {
    constructor(private coreService: OrderCoreService) {}
}
