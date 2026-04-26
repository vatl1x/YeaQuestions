import { useMemo } from "react";
import arrowBtn from "@/shared/assets/icons/pagination-btn.svg";
import styles from "./Pagination.module.scss";
import {
    type PaginationItem,
    usePagination,
} from "@/shared/lib/hooks/usePagination";

interface Props {
    total: number;
    currentPage: number;
    onChangePage: (page: number) => void;
    limit: number;
}

export const Pagination = ({
    total,
    currentPage,
    onChangePage,
    limit,
}: Props) => {
    const totalPages = Math.ceil(total / limit);

    const prev = () => {
        if (currentPage === 1) return;
        onChangePage(currentPage - 1);
    };

    const handlePageClick = (page: PaginationItem) => {
        if (typeof page === "number") {
            onChangePage(page);
        }
    };

    const next = () => {
        if (currentPage === totalPages) return;
        onChangePage(currentPage + 1);
    };
    const paginationItems = useMemo(
        () => usePagination(currentPage, totalPages),
        [currentPage, totalPages],
    );

    if (totalPages <= 1) {
        return null;
    }
    return (
        <div className={styles.pagination}>
            <button
                className={styles.prevBtn}
                disabled={currentPage === 1}
                onClick={prev}
            >
                <img src={arrowBtn} alt="" className={styles.arrowLeft} />
            </button>
            <div className={styles.collectionPage}>
                {paginationItems.map((page, idx) => (
                    <button
                        key={idx}
                        onClick={() => handlePageClick(page)}
                        disabled={page === "..."}
                        className={`${styles.pages} ${currentPage === page ? styles.currentPage : ""}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            <button
                className={styles.nextBtn}
                disabled={currentPage === totalPages}
                onClick={next}
            >
                <img src={arrowBtn} alt="" className={styles.arrowRight} />
            </button>
        </div>
    );
};
