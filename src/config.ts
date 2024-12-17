export class Config {
    /** Default */
    static readonly APP_NAME = 'QR Order';

    /** Swagger */
    static readonly IS_SWAGGER = true;

    /** Data Processing */
    static readonly APP_DATA_PROCESSING_EXPOSE = ['password', 'ci'] as const;
}
