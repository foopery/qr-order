import { Controller, Get, Query } from '@nestjs/common';
import { ProductPublicService } from '../services/product.public.service';
import { ProductPublicFindListDto } from '@resources/product/dto/product.public.find-list.dto';
import { apiResponse } from '@common/functions/api-response';
import { ApiDetail } from '@common/decorators/api-detail.decorator';
import { PRODUCT_CONTROLLER_MESSAGE } from '@resources/product/product.constant';
import { ApiController } from '@common/decorators/api-controller.decorator';
import { ProductPublicFindListResponseDto } from '@resources/product/dto/response/product.public.find-list.response.dto';

@ApiController('products')
export class ProductPublicController {
    constructor(private publicService: ProductPublicService) {}

    @Get()
    @ApiDetail('상품 목록조회', { isAuth: false })
    async findList(@Query() query: ProductPublicFindListDto): Promise<ProductPublicFindListResponseDto> {
        const { resources, meta } = await this.publicService.findList(query);
        return apiResponse(PRODUCT_CONTROLLER_MESSAGE.FIND_LIST, resources, meta);
    }
}
