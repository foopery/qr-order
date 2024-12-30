import { Controller } from '@nestjs/common';
import { OrderItemOptionCoreService } from '../services/order-item-option.core.service';

@Controller('core/order-item-options')
export class OrderItemOptionCoreController {
    constructor(private coreService: OrderItemOptionCoreService) {}
}
