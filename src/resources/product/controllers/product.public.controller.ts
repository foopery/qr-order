import { Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { ProductPublicService } from '../services/product.public.service';
import { ProductPublicFindListDto } from '@resources/product/dto/product.public.find-list.dto';
import { apiResponse } from '@common/functions/api-response';
import { ApiDetail } from '@common/decorators/api-detail.decorator';
import { PRODUCT_CONTROLLER_MESSAGE } from '@resources/product/product.constant';
import { ApiController } from '@common/decorators/api-controller.decorator';
import { ProductPublicFindListResponseDto } from '@resources/product/dto/response/product.public.find-list.response.dto';
import { ProductPublicFindResponseDto } from '@resources/product/dto/response/product.public.find.response.dto';
import { ApiNotFoundResponse } from '@nestjs/swagger';
import { ApiResponseDto } from '@common/dto/response.dto';

@ApiController('products')
export class ProductPublicController {
    constructor(private publicService: ProductPublicService) {}

    @Get()
    @ApiDetail('상품 목록조회', { isAuth: false })
    async findList(@Query() query: ProductPublicFindListDto): Promise<ProductPublicFindListResponseDto> {
        const { resources, meta } = await this.publicService.findList(query);
        return apiResponse(PRODUCT_CONTROLLER_MESSAGE.FIND_LIST, resources, meta);
    }

    @Get(':id')
    @ApiDetail('상품 단일조회', { isAuth: false })
    @ApiNotFoundResponse({ description: 'No Resource', type: ApiResponseDto })
    async find(@Param('id', ParseIntPipe) id: number): Promise<ProductPublicFindResponseDto> {
        const resource = await this.publicService.findUniqueOrThrow(id);
        return apiResponse(PRODUCT_CONTROLLER_MESSAGE.FIND, resource);
    }
}
