import { useRef } from "react";
import SearchFilter from "./SearchFilter/SearchFilter";
import SpecializationFilter from "./SpecializationFilter/SpecializationFilter";
import SkillsFilter from "./SkillsFilter/SkillsFilter";
import ComplexityFilter from "./ComplexityFilter/ComplexityFilter";
import RatingFilter from "./RatingFilter/RatingFilter";
import useClickOutside from "../../hooks/useClickOutside";
import filterClose from "../../assets/icons/filter-close.svg";
import styles from "./QuestionsFilter.module.scss";

interface Props {
    onFilterClose?: () => void;
}

const QuestionFilter = ({ onFilterClose }: Props) => {
    const filtersRef = useRef<HTMLDivElement>(null)
    useClickOutside(filtersRef, onFilterClose)
    return (
        <div ref={filtersRef} className={styles.filterForm}>
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
            <SearchFilter />
            <SpecializationFilter />
            <SkillsFilter />
            <ComplexityFilter />
            <RatingFilter />
        </div>
    );
};

export default QuestionFilter;
