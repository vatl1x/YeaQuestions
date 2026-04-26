import { ButtonFilter } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useSpecializationFilter } from "../../model/useSpecializationFilter";
import styles from "./SpecializationFilter.module.scss";

export const SpecializationFilter = () => {
    const { data, ui, actions, state } = useSpecializationFilter();

    const { specializations, visibleSpecialization } = data;
    const { isSpecializationsLoading, error, isOpen } = ui;
    const { setIsOpen, toggleSpecialization } = actions;
    const { query } = state;

    if (isSpecializationsLoading) {
        return (
            <div className={styles.filterGroup}>
                <Skeleton
                    type="text"
                    width="110px"
                    height="20px"
                    borderRadius="5px"
                />
                <Skeleton
                    type="button"
                    count={5}
                    direction="row"
                    width="100%"
                />
                <Skeleton
                    type="text"
                    width="115px"
                    height="20px"
                    borderRadius="10px"
                />
            </div>
        );
    }

    if (error) {
        const errorMessage =
            "status" in error
                ? `Ошибка загрузки: ${String(error.status)}`
                : "Ошибка загрузки";

        return (
            <div className={styles.filterGroup}>
                <div className={styles.error}>{errorMessage}</div>
            </div>
        );
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
                        onClick={() => toggleSpecialization(item.id)}
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
