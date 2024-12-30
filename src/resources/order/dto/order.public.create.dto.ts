import { Order } from '../models/order.model';
import { ApiProperty, IntersectionType, OmitType, PartialType, PickType } from '@nestjs/swagger';
import { OrderItem } from '@resources/order-item/models/order-item.model';
import { ArrayNotEmpty, IsNotEmpty, ValidateNested } from 'class-validator';

class WithOrderItem extends IntersectionType(
    // 필수
    PickType(OrderItem, ['productId', 'quantity'] as const),

    // 선택
    PickType(PartialType(OrderItem), [] as const),
) {}

export class OrderPublicCreateDto extends IntersectionType(
    // 필수
    PickType(Order, ['tableId'] as const),

    // 선택
    PickType(PartialType(Order), [] as const),
) {
    @ApiProperty({ description: '주문 아이템들' })
    @ArrayNotEmpty()
    @ValidateNested({ each: true })
    orderItems: WithOrderItem[];
}
