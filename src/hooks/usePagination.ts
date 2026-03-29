export type PaginationItem = number | "...";

export const usePagination = (currentPage: number, totalPages: number): PaginationItem[] => {
    const dots = "...";

    if (totalPages <= 1) {
        return []
    }
    if (totalPages <= 7) {
        return [...Array(totalPages)].map((_, idx) => idx + 1);
    }

    if (currentPage < 5) {
        return [1, 2, 3, 4, 5, 6, dots, totalPages];
    }

    if (currentPage >= totalPages - 2) {
        return [
            1,
            dots,
            totalPages - 5,
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages,
        ];
    }
    return [
        1,
        dots,
        currentPage - 3, //
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        dots,
        totalPages,
    ];
};
