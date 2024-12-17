export class ApiResponseDto {
    /**
     * 반환 메세지
     * @example "결과 메세지가 반환됩니다."
     * */
    message!: string;

    /**
     * 반환 코드
     * @example 0
     * */
    code!: number;
}
