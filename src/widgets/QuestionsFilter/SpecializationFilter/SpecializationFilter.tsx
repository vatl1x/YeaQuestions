import { useState } from "react";
import { useSpecialization } from "../../../hooks/useSpecialization";
import { useQuestionsQuery } from "../../../hooks/useQuestionsQuery";
import ButtonFilter from "../../../ui/ButtonFilter/ButtonFilter";
import Skeleton from "../../../ui/Skeleton/Skeleton";
import styles from "./SpecializationFilter.module.scss";

const SpecializationFilter = () => {
    const { query, setQuery } = useQuestionsQuery();
    const { specializations, isLoading, error } = useSpecialization();
    const [isOpen, setIsOpen] = useState(false);

    const sortedSpecialization = specializations?.sort((a, b) => a.id - b.id);
    const visibleSpecialization = isOpen
        ? sortedSpecialization
        : sortedSpecialization?.slice(0, 5);

    const toggleSpecialization = (id: number, title: string) => {
        const isActive = query.specializationId === id;

        setQuery({
            ...query,
            specializationTitle: isActive ? undefined : title,
            specializationId: isActive ? null : id,
            skills: [],
            page: 1,
        });
    };

    if (isLoading) {
        <div className={styles.filterGroup}>
            <Skeleton
                type="text"
                width="110px"
                height="20px"
                borderRadius="5px"
            />
            <Skeleton type="button" count={5} direction="row" width="100%" />
            <Skeleton
                type="text"
                width="115px"
                height="20px"
                borderRadius="10px"
            />
        </div>;
    }

    if (error) {
        <div className={styles.filterGroup}>
            <div className={styles.error}>{error}</div>
        </div>;
    }

    return (
        <div className={styles.filterGroup}>
            <span className={styles.label}>Специализация:</span>
            <div className={styles.button}>
                {visibleSpecialization?.map((item) => (
                    <ButtonFilter
                        key={item.id}
                        title={item.title}
                        isActive={query.specializationId === item.id}
                        onClick={() =>
                            toggleSpecialization(item.id, item.title)
                        }
                    />
                ))}
            </div>
            {(specializations?.length ?? 0) > 5 && (
                <button
                    className={styles.showAll}
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? "Скрыть" : "Просмотреть все"}
                </button>
            )}
        </div>
    );
};

export default SpecializationFilter;
