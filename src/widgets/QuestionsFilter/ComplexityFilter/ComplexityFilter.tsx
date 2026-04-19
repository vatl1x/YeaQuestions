import { useQuestionsQuery } from "../../../hooks/useQuestionsQuery";
import { COMPLEXITY_RANGES } from "./complexityFilter.constants";
import Skeleton from "../../../ui/Skeleton/Skeleton";
import ButtonFilter from "../../../ui/ButtonFilter/ButtonFilter";
import styles from "./ComplexityFilter.module.scss";

interface Props {
    isLoading: boolean;
}

const ComplexityFilter = ({isLoading}:Props) => {
    const { query, setQuery } = useQuestionsQuery();

    const toggleComplexity = (complexityValues: number[]) => {
        const currentComplexity = query.complexity ?? [];
        const isActive = complexityValues.some((value) =>
            currentComplexity?.includes(value),
        );

        setQuery({
            ...query,
            complexity: isActive
                ? currentComplexity.filter(
                      (value) => !complexityValues?.includes(value),
                  )
                : [...currentComplexity, ...complexityValues],
            page: 1,
        });
    };

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
                    count={4}
                    direction="row"
                    width="50px"
                />
            </div>
        );
    }

    return (
        <div className={styles.filterGroup}>
            <span className={styles.label}>Сложность</span>
            <div className={styles.button}>
                {COMPLEXITY_RANGES.map((item) => (
                    <ButtonFilter
                        key={item.label}
                        title={item.label}
                        isActive={item.values.some((value) =>
                            query.complexity?.includes(value),
                        )}
                        onClick={() => toggleComplexity(item.values)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ComplexityFilter;
