import { ButtonFilter } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/Skeleton";
import { COMPLEXITY_RANGES } from "../../model/constants";
import { useComplexityFilter } from "../../model/useComplexityFilter";
import styles from "./ComplexityFilter.module.scss";

interface Props {
    isLoading: boolean;
}

export const ComplexityFilter = ({ isLoading }: Props) => {
    const { query, toggleComplexity } = useComplexityFilter();

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
