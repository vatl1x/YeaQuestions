import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useFilters } from "../context/FiltersContext";
import { getQuestions } from "../api/questionsApi";
import { useQuestionsQuery } from "./useQuestionsQuery";
import type { QuestionApiResponse } from "../types/question";

export const useQuestions = () => {
    const { query, setQuery } = useQuestionsQuery();
    const { setIsQuestionsLoading, setQuestionSlugs } =
        useFilters();
    const location = useLocation();
    const [data, setData] = useState<QuestionApiResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const setCurrentPage = (page: number) => {
        setQuery({ ...query, page });
    };

    useEffect(() => {
        setIsLoading(true);
        (async () => {
            try {
                const response = await getQuestions({
                    page: query.page,
                    title: query.title,
                    specializationId: query.specializationId,
                    skills: query.skills,
                    complexity: query.complexity,
                    rate: query.rate,
                });
                setData(response);
                setQuestionSlugs(
                    response.data?.map((question) => question.slug),
                );
            } catch (error) {
                setError(`Ошибка загрузки: ${error}`);
            } finally {
                setIsLoading(false);
            }
        })();
    }, [location.search]);

    useEffect(() => {
        setIsQuestionsLoading(isLoading);
    }, [isLoading]);

    const { data: questions, total = 0, limit = 10 } = data ?? {};

    return {
        questions,
        total,
        limit,
        currentPage: query.page,
        setCurrentPage,
        isLoading,
        error,
    };
};
