import { useState } from "react";
import { useQuestionsQuery } from "@/entities/question/model/useQuestionsQuery";
import { useGetSkillsQuery } from "@/entities/skill/api/skillsApi";

export const useSkillsFilter = () => {
    const { query, setQuery } = useQuestionsQuery();
    const { data, isLoading, error } = useGetSkillsQuery({
        specializationId: query.specializationId,
    });

    const skills = data?.data ?? [];

    const [isOpen, setIsOpen] = useState(false);

    const sortedSkills = [...skills]?.sort((a, b) => a.id - b.id);
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
    return {
        data: {
            skills,
            visibleSkills,
        },
        ui: {
            isLoading,
            error,
            isOpen,
        },
        actions: {
            setIsOpen,
            toggleSkills,
        },
        state: { query },
    };
};
