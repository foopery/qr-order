import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsDate, IsEnum } from 'class-validator';
import { Prisma } from '@prisma/client';
import { IsBoolean } from '@common/decorators/is-boolean';
import { ProductState } from '@resources/product/enums/product.state';

export class Product {
    @ApiProperty({
        description: '아이디',
        nullable: false,
        type: Number,
    })
    @Type(() => Number)
    @IsInt()
    id: number;

    @ApiProperty({
        description: '상태 (활성화: 1, 비활성화: 2)',
        nullable: false,
        type: Number,
    })
    @Type(() => Number)
    @IsEnum(ProductState)
    state: ProductState;

    @ApiProperty({
        description: '상품명',
        nullable: false,
        type: String,
    })
    @Type(() => String)
    @IsString()
    name: string;

    @ApiProperty({
        description: '썸네일(대표사진) URL',
        nullable: false,
        type: String,
    })
    @Type(() => String)
    @IsString()
    thumbnailUrl: string;

    @ApiProperty({
        description: '내용',
        nullable: false,
        type: String,
    })
    @Type(() => String)
    @IsString()
    content: string;

    @ApiProperty({
        description: '메인 가격',
        nullable: false,
        type: String,
    })
    @Type(() => String)
    mainPrice: Prisma.Decimal;

    @ApiProperty({
        description: '할인 가격',
        nullable: false,
        type: String,
    })
    @Type(() => String)
    discountPrice: Prisma.Decimal;

    @ApiProperty({
        description: '할인 여부',
        nullable: false,
        type: Boolean,
    })
    @Type(() => Boolean)
    @IsBoolean()
    isDiscount: boolean;

    @ApiProperty({
        description: '수량',
        nullable: false,
        type: Number,
    })
    @Type(() => Number)
    @IsInt()
    quantity: number;

    @ApiProperty({
        description: '수량 사용 여부 (false면, 수량 무제한)',
        nullable: false,
        type: Boolean,
    })
    @Type(() => Boolean)
    @IsBoolean()
    isQuantity: boolean;

    @ApiProperty({
        description: '생성일',
        nullable: false,
        type: Date,
    })
    @Type(() => Date)
    @IsDate()
    createdAt: Date;

    @ApiProperty({
        description: '수정일',
        nullable: true,
        type: Date,
    })
    @Type(() => Date)
    @IsDate()
    updatedAt: Date | null;
}
