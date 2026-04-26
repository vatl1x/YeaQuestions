import { useRef } from "react";
import { Card } from "@/shared/ui";
import { SearchFilter } from "@/features/search-by-keywords";
import { SpecializationFilter } from "@/features/filter-by-specialization";
import { SkillsFilter } from "@/features/filter-by-skills";
import { ComplexityFilter } from "@/features/filter-by-complexity";
import { RatingFilter } from "@/features/filter-by-rating";
import useClickOutside from "@/shared/lib/hooks/useClickOutside";
import filterClose from "@/shared/assets/icons/filter-close.svg";
import styles from "./QuestionsFilter.module.scss";

interface Props {
    isLoading: boolean;
    onFilterClose?: () => void;
}

export const QuestionFilter = ({ isLoading, onFilterClose }: Props) => {
    const filtersRef = useRef<HTMLDivElement>(null);
    useClickOutside(filtersRef, onFilterClose);

    return (
        <Card ref={filtersRef} className={styles.filterForm}>
            {onFilterClose && (
                <div className={styles.closeWrap}>
                    <button onClick={onFilterClose} className={styles.closeBtn}>
                        <img
                            className={styles.filterCloseIcon}
                            src={filterClose}
                            alt=""
                        />
                    </button>
                </div>
            )}
            <SearchFilter isLoading={isLoading} />
            <SpecializationFilter />
            <SkillsFilter />
            <ComplexityFilter isLoading={isLoading} />
            <RatingFilter isLoading={isLoading} />
        </Card>
    );
};
