import { Controller } from '@nestjs/common';
import { OrderItemMgmtService } from '../services/order-item.mgmt.service';

@Controller('management/order-items')
export class OrderItemMgmtController {
    constructor(private mgmtService: OrderItemMgmtService) {}
}
