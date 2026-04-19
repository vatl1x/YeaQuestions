import { useQuestionsQuery } from "./useQuestionsQuery";
import { useGetQuestionsQuery } from "../store/services/questionsApi";
export const useQuestions = () => {
    const { query, setQuery } = useQuestionsQuery();
    const { data, error, isLoading } = useGetQuestionsQuery({
        page: query.page,
        title: query.title,
        specializationId: query.specializationId,
        skills: query.skills,
        complexity: query.complexity,
        rate: query.rate,
    });

    const setCurrentPage = (page: number) => {
        setQuery({ ...query, page });
    };

    const questions = data?.data ?? [];
    const total = data?.total ?? 0;
    const limit = data?.limit ?? 10;
    const errorMessage = error ? "Ошибка загрузки" : null;

    return {
        questions,
        total,
        limit,
        currentPage: query.page,
        setCurrentPage,
        isLoading,
        error: errorMessage,
    };
};
