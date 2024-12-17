import { ApiProperty } from '@nestjs/swagger';

export class MetadataDto {
    @ApiProperty({ description: '요청 페이지', type: Number, nullable: true })
    currentPage: number | null;

    @ApiProperty({ description: '요청 리소스 제한 수', type: Number, nullable: true })
    currentLimit: number | null;

    @ApiProperty({ description: '전체 페이지', type: Number, nullable: true })
    totalPage: number | null;

    @ApiProperty({ description: '전체 리소스 수', type: Number })
    totalCount: number;
}
