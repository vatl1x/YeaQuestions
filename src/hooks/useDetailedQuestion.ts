import { useEffect, useState } from "react";
import type { DetailedQuestion } from "../types/question";
import { getQuestionsBySlug } from "../api/questionsApi";

export const useDetailedQuestion = (slug: string) => {
    const [data, setData] = useState<DetailedQuestion | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await getQuestionsBySlug(slug);
                setData(response);
            } catch (error) {
                setError(`Ошибка загрузки ${error}`);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [slug]);

    return { data, isLoading, error };
};
