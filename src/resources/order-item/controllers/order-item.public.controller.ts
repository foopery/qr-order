import { Controller } from '@nestjs/common';
import { OrderItemPublicService } from '../services/order-item.public.service';

@Controller('order-items')
export class OrderItemPublicController {
    constructor(private publicService: OrderItemPublicService) {}
}
