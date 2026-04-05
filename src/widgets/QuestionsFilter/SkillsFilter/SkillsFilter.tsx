import { useState } from "react";
import { useQuestionsQuery } from "../../../hooks/useQuestionsQuery";
import { useSkills } from "../../../hooks/useSkills";
import ButtonFilter from "../../../ui/ButtonFilter/ButtonFilter";
import Skeleton from "../../../ui/Skeleton/Skeleton";
import styles from "./SkillsFilter.module.scss";

const SkillsFilter = () => {
    const { query, setQuery } = useQuestionsQuery();
    const { skills, isLoading, error } = useSkills();
    const [isOpen, setIsOpen] = useState(false);

    const sortedSkills = skills?.sort((a, b) => a.id - b.id);
    const visibleSkills = isOpen ? sortedSkills : sortedSkills?.slice(0, 5);

    const toggleSkills = (id: number) => {
        const currentSkills = query.skills ?? [];
        const isActive = currentSkills.includes(id);

        setQuery({
            ...query,
            skills: isActive
                ? currentSkills.filter((itemId) => itemId !== id)
                : [...currentSkills, id],
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
        return (
            <div className={styles.filterGroup}>
                <div className={styles.error}>{error}</div>
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

export default SkillsFilter;
