import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
    @ApiProperty({ description: '요청 페이지', type: Number, required: true })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page: number;

    @ApiProperty({ description: '요청 데이터 수 (최대 500)', type: Number, required: true })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(500)
    limit: number;
}
