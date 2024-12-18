import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString, IsInt, IsDate } from 'class-validator';

export class ProductOption {
    @ApiProperty({
        description: '아이디',
        type: Number,
        nullable: false,
    })
    @Type(() => Number)
    @IsInt()
    id: number;

    @ApiProperty({
        description: '그룹 아이디',
        type: Number,
        nullable: false,
    })
    @Type(() => Number)
    @IsInt()
    groupId: number;

    @ApiProperty({
        description: '내용',
        type: String,
        nullable: false,
    })
    @Type(() => String)
    @IsString()
    value: string;

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
