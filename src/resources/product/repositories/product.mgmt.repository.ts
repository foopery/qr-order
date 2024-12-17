import { Injectable } from '@nestjs/common';
import { ProductCommonRepository } from './product.common.repository';
import { Prisma } from '@prisma/client';
import { PrismaRepository } from '@core/prisma/prisma.repository';
import { ProductMgmtFindListDto } from '@resources/product/dto/product.mgmt.find-list.dto';
import { getMetadata } from '../../../common/functions/get-metadata';

@Injectable()
export class ProductMgmtRepository extends ProductCommonRepository {
    constructor(protected prisma: PrismaRepository) {
        super(prisma);
    }

    async create(data: Prisma.ProductCreateInput | Prisma.ProductUncheckedCreateInput) {
        return this.prisma.product.create({ data });
    }

    async update(id: number, data: Prisma.ProductUpdateInput) {
        return this.prisma.product.update({ where: { id }, data });
    }

    async delete(id: number) {
        return this.prisma.product.delete({ where: { id } });
    }

    async findUnique(id: number) {
        return this.prisma.product.findUnique({ where: { id } });
    }

    async findList(data: ProductMgmtFindListDto) {
        const options = Prisma.validator<Prisma.ProductFindManyArgs>()({
            where: {},
        });

        const [resources, count] = await this.prisma.$transaction([this.prisma.product.findMany(options), this.prisma.product.count({ where: options.where })]);

        return { resources, meta: getMetadata(data, count) };
    }
}
