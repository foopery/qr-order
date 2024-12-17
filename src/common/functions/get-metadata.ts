export function getMetadata(data: { page: number; limit: number }, totalCount: number | { count: bigint }[]) {
    if (totalCount instanceof Array) {
        if (totalCount.length !== 0) {
            totalCount = Number(totalCount[0]['count']) as number;
        } else {
            totalCount = 0 as number;
        }
    }

    return {
        currentPage: data.page || null,
        currentLimit: data.limit || null,
        totalPage: totalCount && data.limit ? Math.ceil(totalCount / data.limit) : null,
        totalCount,
    };
}
