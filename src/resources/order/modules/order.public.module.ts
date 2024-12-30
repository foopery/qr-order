import { Module } from '@nestjs/common';
import { OrderPublicController } from '../controllers/order.public.controller';
import { OrderPublicService } from '../services/order.public.service';
import { OrderPublicRepository } from '../repositories/order.public.repository';
import { PrismaModule } from '@core/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [OrderPublicController],
    providers: [OrderPublicService, OrderPublicRepository],
    exports: [OrderPublicService],
})
export class OrderPublicModule {}
