import { Injectable } from '@nestjs/common';
import { OrderCommonService } from './order.common.service';
import { OrderPublicRepository } from '../repositories/order.public.repository';

@Injectable()
export class OrderPublicService extends OrderCommonService {
    constructor(private publicRepository: OrderPublicRepository) {
        super(publicRepository);
    }

    async test() {
        await this.publicRepository.create({
            tableId: 1,
            items: {
                create: [
                    {
                        productId: 1,
                        mainPrice: 10000,
                        discountPrice: 1000,
                        isDiscount: true,
                        quantity: 1,
                        options: {
                            create: [
                                {
                                    productOptionGroupId: 1,
                                    productOptionId: 1,
                                    price: 10000,
                                    value: 'TEST',
                                },
                            ],
                        },
                    },
                ],
            },
        });
    }
}
