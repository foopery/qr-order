import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClsMiddleware, ClsModule } from 'nestjs-cls';
import * as crypto from 'node:crypto';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@core/logger/logger.module';
import { ValidationPipe } from './common/pipes/validation.pipe';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ExceptionFilter } from './common/filters/exception.filter';
import { PrismaModule } from './core/prisma/prisma.module';
import { ProductModule } from '@resources/product/product.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        ClsModule.forRoot({
            global: true,
            middleware: {
                mount: true,
                generateId: true,
                idGenerator: () => crypto.randomBytes(10).toString('hex'),
                setup: (cls, req) => {
                    cls.set('now', Date.now());
                },
            },
        }),
        LoggerModule,
        PrismaModule,

        /** Resources */
        ProductModule,
    ],
    providers: [
        { provide: APP_PIPE, useClass: ValidationPipe },
        { provide: APP_FILTER, useClass: ExceptionFilter },
        // { provide: APP_INTERCEPTOR, useClass: DataProcessingInterceptor },
        // { provide: APP_INTERCEPTOR, useClass: HttpLoggerInterceptor },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): void {
        consumer.apply(ClsMiddleware).forRoutes('*');
    }
}
