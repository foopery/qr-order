import { Controller } from '@nestjs/common';
import { OrderItemOptionMgmtService } from '../services/order-item-option.mgmt.service';

@Controller('management/order-item-options')
export class OrderItemOptionMgmtController {
    constructor(private mgmtService: OrderItemOptionMgmtService) {}
}
