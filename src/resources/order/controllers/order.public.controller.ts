import { Controller } from '@nestjs/common';
import { OrderPublicService } from '../services/order.public.service';

@Controller('orders')
export class OrderPublicController {
    constructor(private publicService: OrderPublicService) {}
}
