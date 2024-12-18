import { applyDecorators } from '@nestjs/common';
import { ApiSchema } from '@nestjs/swagger';

let apiSchemaId = 0;

export function AutoApiSchema() {
    apiSchemaId++;
    return applyDecorators(ApiSchema({ name: `data_model_${apiSchemaId}` }));
}
