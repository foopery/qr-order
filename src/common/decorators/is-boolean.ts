import { applyDecorators } from '@nestjs/common';
import { IsBoolean as OriginalIsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { ValidationOptions } from 'class-validator/types/decorator/ValidationOptions';

/** Custom Is Boolean */
export function IsBoolean(validationOptions?: ValidationOptions) {
    return applyDecorators(IsCustomBoolean(), OriginalIsBoolean(validationOptions));
}

function IsCustomBoolean() {
    const toPlain = Transform(
        ({ value }) => {
            return value;
        },
        {
            toPlainOnly: true,
        },
    );
    const toClass = (target: any, key: string) => {
        return Transform(
            ({ obj }) => {
                return valueToBoolean(obj[key]);
            },
            {
                toClassOnly: true,
            },
        )(target, key);
    };
    return function (target: any, key: string) {
        toPlain(target, key);
        toClass(target, key);
    };
}

function valueToBoolean(value: any) {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (['true', '1'].includes(value.toLowerCase())) {
        return true;
    }
    if (['false', '0'].includes(value.toLowerCase())) {
        return false;
    }
    return value;
}
