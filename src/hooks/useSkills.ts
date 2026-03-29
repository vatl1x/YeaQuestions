import { useEffect, useState } from "react";
import { getSkills } from "../api/skillsApi";
import { useQuestionsQuery } from "./useQuestionsQuery";
import type { SkillsApiResponse } from "../types/skill";


export const useSkills = () => {
    const { query } = useQuestionsQuery();
    const [data, setData] = useState<SkillsApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await getSkills({
                    specializationId: query.specializationId,
                });

                setData(response);
            } catch (error) {
                setError("Ошибка загрузки");
            } finally {
                setIsLoading(false);
            }
        })();
    }, [query.specializationId]);

    const skills = data?.data;

    return { skills, isLoading, error };
};
