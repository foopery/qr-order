import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsDate } from 'class-validator';

export class Order {
    @ApiProperty({ description: '아이디', nullable: false, type: Number })
    @Type(() => Number)
    @IsInt()
    id: number;

    @ApiProperty({ description: '테이블 아이디', nullable: false, type: Number })
    @Type(() => Number)
    @IsInt()
    tableId: number;

    @ApiProperty({ description: '상태 -1: 취소, 1: 접수, 2: 조리중, 3: 완료', nullable: false, type: Number })
    @Type(() => Number)
    @IsInt()
    state: number;

    @ApiProperty({ description: '생성일', nullable: false, type: Date })
    @Type(() => Date)
    @IsDate()
    createdAt: Date;

    @ApiProperty({ description: '수정일', nullable: true, type: Date })
    @Type(() => Date)
    @IsDate()
    updatedAt: Date | null;
}
