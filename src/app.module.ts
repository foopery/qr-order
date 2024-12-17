import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClsMiddleware, ClsModule } from 'nestjs-cls';
import * as crypto from 'node:crypto';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './_utils/modules/database/database.module';
import { LoggerModule } from './_utils/modules/logger/logger.module';
import { BcryptModule } from './_utils/modules/bcrypt/bcrypt.module';
import { ValidationPipe } from './_utils/pipes/validation.pipe';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { ExceptionFilter } from './_utils/filters/exception.filter';

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
        BcryptModule,
        LoggerModule,
        DatabaseModule,
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
