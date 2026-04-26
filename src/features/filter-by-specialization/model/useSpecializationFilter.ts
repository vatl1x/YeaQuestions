import { useState } from "react";
import { useQuestionsQuery } from "@/entities/question";
import { useGetSpecializationsQuery } from "@/entities/specialization";

export const useSpecializationFilter = () => {
    const { query, setQuery } = useQuestionsQuery();
    const {
        data,
        isLoading: isSpecializationsLoading,
        error,
    } = useGetSpecializationsQuery();

    const specializations = data?.data ?? [];

    const [isOpen, setIsOpen] = useState(false);

    const sortedSpecialization = [...specializations]?.sort(
        (a, b) => a.id - b.id,
    );

    const visibleSpecialization = isOpen
        ? sortedSpecialization
        : sortedSpecialization?.slice(0, 5);

    const toggleSpecialization = (id: number) => {
        const isActive = query.specializationId === id;
        setQuery({
            ...query,
            specializationId: isActive ? null : id,
            skills: [],
            page: 1,
        });
    };

    return {
        data: { specializations, visibleSpecialization },
        ui: {
            isSpecializationsLoading,
            error,
            isOpen,
        },
        actions: {
            setIsOpen,
            toggleSpecialization,
        },
        state: { query },
    };
};
