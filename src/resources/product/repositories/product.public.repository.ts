import { Injectable } from '@nestjs/common';
import { ProductCommonRepository } from './product.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';
import { ProductPublicFindListDto } from '@resources/product/dto/product.public.find-list.dto';
import { ProductPublicFindListSort } from '@resources/product/enums/product.find-list.sort';
import { getMetadata } from '@common/functions/get-metadata';

@Injectable()
export class ProductPublicRepository extends ProductCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }

    async findUnique(id: number) {
        return this.prisma.product.findUnique({ where: { id }, include: { optionGroups: { include: { options: true } } } });
    }

    async findList(data: ProductPublicFindListDto) {
        const options = Prisma.validator<Prisma.ProductFindManyArgs>()({
            where: {},
            take: data.limit,
            skip: (data.page - 1) * data.limit,
            orderBy: (() => {
                switch (data.sort) {
                    case ProductPublicFindListSort.CREATED_AT_DESC:
                        return { createdAt: 'desc' };
                    case ProductPublicFindListSort.CREATED_AT_ASC:
                        return { createdAt: 'asc' };
                    default:
                        return {};
                }
            })(),
        });

        const [resources, count] = await this.prisma.$transaction([this.prisma.product.findMany(options), this.prisma.product.count({ where: options.where })]);

        return { resources, meta: getMetadata(data, count) };
    }
}
