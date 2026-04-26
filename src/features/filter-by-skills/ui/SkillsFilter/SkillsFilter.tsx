import { ButtonFilter } from "@/shared/ui";
import { Skeleton } from "@/shared/ui/Skeleton";
import { useSkillsFilter } from "../../model/useSkillsFilter";
import styles from "./SkillsFilter.module.scss";

export const SkillsFilter = () => {
    const { data, ui, actions, state } = useSkillsFilter();

    const { skills, visibleSkills } = data;
    const { isLoading, error, isOpen } = ui;
    const { setIsOpen, toggleSkills } = actions;
    const { query } = state;

    if (isLoading) {
        return (
            <div className={styles.filterGroup}>
                <Skeleton
                    type="text"
                    width="115px"
                    height="20px"
                    borderRadius="5px"
                />
                <Skeleton type="button" count={5} direction="row" />
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
            <span className={styles.label}>Выберите навыки</span>
            <div className={styles.button}>
                {visibleSkills?.map((item) => (
                    <ButtonFilter
                        key={item.id}
                        title={item.title}
                        icon={item.imageSrc ?? undefined}
                        isActive={query.skills?.includes(item.id)}
                        onClick={() => toggleSkills(item.id)}
                    />
                ))}
            </div>
            {(skills?.length ?? 0) > 5 && (
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
