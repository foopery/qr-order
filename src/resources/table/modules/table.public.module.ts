import { Module } from '@nestjs/common';
import { TablePublicController } from '../controllers/table.public.controller';
import { TablePublicService } from '../services/table.public.service';
import { TablePublicRepository } from '../repositories/table.public.repository';

@Module({
    controllers: [TablePublicController],
    providers: [TablePublicService, TablePublicRepository],
    exports: [TablePublicService],
})
export class TablePublicModule {}
