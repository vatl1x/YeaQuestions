import { useRef } from "react";
import Card from "../../ui/Card/Card";
import SearchFilter from "./SearchFilter/SearchFilter";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import ComplexityFilter from "./ComplexityFilter/ComplexityFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import useClickOutside from "../../hooks/useClickOutside";
import filterClose from "../../assets/icons/filter-close.svg";
import styles from "./QuestionsFilter.module.scss";

interface Props {
    isLoading: boolean;
    onFilterClose?: () => void;
}

const QuestionFilter = ({ isLoading, onFilterClose }: Props) => {
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

export default QuestionFilter;
