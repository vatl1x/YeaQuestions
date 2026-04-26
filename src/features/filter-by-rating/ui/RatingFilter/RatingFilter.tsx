import { ButtonFilter } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/Skeleton";
import styles from "./RatingFilter.module.scss";
import { useRatingFilter } from "../../model/useRatingFilter";

interface Props {
    isLoading: boolean;
}

export const RatingFilter = ({ isLoading }: Props) => {
    const { query, toggleRate } = useRatingFilter();

    if (isLoading) {
        return (
            <div className={styles.filterGroup}>
                <Skeleton
                    type="text"
                    width="115px"
                    height="20px"
                    borderRadius="5px"
                />
                <Skeleton
                    type="button"
                    width="36px"
                    height="36px"
                    count={5}
                    direction="row"
                />
            </div>
        );
    }

    return (
        <div className={styles.filterGroup}>
            <span className={styles.label}>Рейтинг</span>
            <div className={styles.button}>
                {[...Array(5)].map((_, idx) => (
                    <ButtonFilter
                        key={idx}
                        title={String(idx + 1)}
                        isActive={query.rate?.includes(idx + 1)}
                        onClick={() => toggleRate(idx + 1)}
                    />
                ))}
            </div>
        </div>
    );
};
