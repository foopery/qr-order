import { BaseException } from './base.exception';
import { HttpStatus } from '@nestjs/common';

export class HttpException extends BaseException {
    constructor(message: string, code: number = -1, statusCode: number) {
        super(message, code, statusCode);
    }
}

export class BadRequestException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.BAD_REQUEST);
    }
}

export class UnauthorizedException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.UNAUTHORIZED);
    }
}

export class NotFoundException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.NOT_FOUND);
    }
}

export class ResourceNotFoundException extends NotFoundException {
    constructor(resource: string) {
        super(`${resource}이(가) 존재하지 않습니다.`);
    }
}

export class ForbiddenException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.FORBIDDEN);
    }
}

export class NotAcceptableException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.NOT_ACCEPTABLE);
    }
}

export class RequestTimeoutException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.REQUEST_TIMEOUT);
    }
}

export class ConflictException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.CONFLICT);
    }
}

export class GoneException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.GONE);
    }
}

export class HttpVersionNotSupportedException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.HTTP_VERSION_NOT_SUPPORTED);
    }
}

export class PayloadTooLargeException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.PAYLOAD_TOO_LARGE);
    }
}

export class UnsupportedMediaTypeException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
    }
}

export class UnprocessableEntityException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.UNPROCESSABLE_ENTITY);
    }
}

export class InternalServerErrorException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

export class NotImplementedException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.NOT_IMPLEMENTED);
    }
}

export class ImATeapotException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.I_AM_A_TEAPOT);
    }
}

export class MethodNotAllowedException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.METHOD_NOT_ALLOWED);
    }
}

export class BadGatewayException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.BAD_GATEWAY);
    }
}

export class ServiceUnavailableException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.SERVICE_UNAVAILABLE);
    }
}

4;

export class GatewayTimeoutException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.GATEWAY_TIMEOUT);
    }
}

export class PreconditionFailedException extends BaseException {
    constructor(message: string, code: number = -1) {
        super(message, code, HttpStatus.PRECONDITION_FAILED);
    }
}
