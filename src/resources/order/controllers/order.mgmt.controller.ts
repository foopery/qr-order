import { Controller } from '@nestjs/common';
import { OrderMgmtService } from '../services/order.mgmt.service';

@Controller('management/orders')
export class OrderMgmtController {
    constructor(private mgmtService: OrderMgmtService) {}
}
