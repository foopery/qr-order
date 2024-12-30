import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsDate } from 'class-validator';
import { Prisma } from '@prisma/client';
import { IsBoolean } from '@common/decorators/is-boolean';

export class OrderItem {
    @ApiProperty({ description: '아이디', type: Number, nullable: false })
    @Type(() => Number)
    @IsInt()
    id: number;

    @ApiProperty({ description: '상품 아이디', type: Number, nullable: false })
    @Type(() => Number)
    @IsInt()
    productId: number;

    @ApiProperty({ description: '주문 아이디', type: Number, nullable: false })
    @Type(() => Number)
    @IsInt()
    orderId: number;

    @ApiProperty({ description: '메인 가격', type: String, nullable: false })
    @Type(() => String)
    mainPrice: Prisma.Decimal;

    @ApiProperty({ description: '할인 가격', type: String, nullable: false })
    @Type(() => String)
    discountPrice: Prisma.Decimal;

    @ApiProperty({ description: '할인 여부', type: Boolean, nullable: false })
    @Type(() => Boolean)
    @IsBoolean()
    isDiscount: boolean;

    @ApiProperty({ description: '주문 수량', type: Number, nullable: false })
    @Type(() => Number)
    @IsInt()
    quantity: number;

    @ApiProperty({ description: '생성일', type: Date, nullable: false })
    @Type(() => Date)
    @IsDate()
    createdAt: Date;

    @ApiProperty({ description: '수정일', type: Date, nullable: true })
    @Type(() => Date)
    @IsDate()
    updatedAt: Date | null;
}
