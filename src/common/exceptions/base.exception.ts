export class BaseException extends Error {
    public code: number;
    public statusCode: number;
    public data: null;
    constructor(message: string, code: number, statusCode: number, data: unknown = null) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.statusCode = statusCode;
        this.data = null;
    }
}
