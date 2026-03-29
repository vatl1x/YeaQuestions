import { useFilters } from "../../../context/FiltersContext";
import Skeleton from "../../../ui/Skeleton/Skeleton";
import ButtonFilter from "../../../ui/ButtonFilter/ButtonFilter";
import { useQuestionsQuery } from "../../../hooks/useQuestionsQuery";
import styles from "./RatingFilter.module.scss";

const RatingFilter = () => {
    const { query, setQuery } = useQuestionsQuery();
    const { isQuestionsLoading } = useFilters();

    const toggleRate = (idx: number) => {
        const currentRate = query.rate ?? [];
        const value = idx + 1;
        const isActive = currentRate.includes(value);

        setQuery({
            ...query,
            rate: isActive
                ? currentRate.filter((rate) => rate !== value)
                : [...currentRate, value],
            page: 1,
        });
    };

    if (isQuestionsLoading) {
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
                        onClick={() => toggleRate(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RatingFilter;
