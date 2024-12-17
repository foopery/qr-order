import { MetadataDto } from '@common/dto/metadata.dto';

export function apiResponse<T>(message: string): { code: number; message: string; data: null };
export function apiResponse<T>(message: string, data: T | null): { code: number; message: string; data: T };
export function apiResponse<T>(message: string, data: T | null, meta: MetadataDto): { code: number; message: string; data: T; meta: MetadataDto };
export function apiResponse<T>(message: string, data?: T | null, meta?: MetadataDto) {
    /** 데이터 값이 없을 경우 null */
    if (data === undefined) data = null;

    /** 메타 데이터가 없을 경우 반환 케이스 */
    if (!meta) return { code: 0, message, data };

    /** 전체 반환 케이스 */
    return { code: 0, message, data, meta };
}
