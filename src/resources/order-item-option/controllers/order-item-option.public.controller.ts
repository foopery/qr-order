import { Controller } from '@nestjs/common';
import { OrderItemOptionPublicService } from '../services/order-item-option.public.service';

@Controller('order-item-options')
export class OrderItemOptionPublicController {
    constructor(private publicService: OrderItemOptionPublicService) {}
}
