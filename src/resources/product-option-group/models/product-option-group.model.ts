import { ApiProperty } from '@nestjs/swagger';
import { Type, Transform } from 'class-transformer';
import { IsString, IsInt, IsDate } from 'class-validator';

export class ProductOptionGroup {
    @ApiProperty({
        description: '아이디',
        type: Number,
        nullable: false,
    })
    @Type(() => Number)
    @IsInt()
    id: number;

    @ApiProperty({
        description: '상품 아이디',
        type: Number,
        nullable: false,
    })
    @Type(() => Number)
    @IsInt()
    productId: number;

    @ApiProperty({
        description: '타입 1: 단일 선택, 2: 다중 선택',
        type: Number,
        nullable: false,
    })
    @Type(() => Number)
    @IsInt()
    type: number;

    @ApiProperty({
        description: '타이틀',
        type: String,
        nullable: false,
    })
    @Type(() => String)
    @IsString()
    title: string;

    @ApiProperty({
        description: '생성일',
        type: Date,
        nullable: false,
    })
    @Type(() => Date)
    @IsDate()
    createdAt: Date;

    @ApiProperty({
        description: '수정일',
        type: Date,
        nullable: true,
    })
    @Type(() => Date)
    @IsDate()
    updatedAt: Date | null;
}
