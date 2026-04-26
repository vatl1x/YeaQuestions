import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useGetQuestionBySlugQuery } from "@/entities/question";
import type { QuestionNavigationState } from "@/entities/question";
import { useDisclosure } from "@/shared/lib/hooks/useDisclosure";

export const useDetailedQuestionPage = () => {
    const { slug } = useParams<{ slug: string }>();
    //тут currentData чтобы скелетон работал при пагинации детальных вопросов
    const { currentData, isLoading, isFetching, error } =
        useGetQuestionBySlugQuery(slug!, {
            skip: !slug,
        });
    const { isOpen, toggle, close } = useDisclosure();

    const location = useLocation();
    const state = location.state as QuestionNavigationState | null;
    const navigate = useNavigate();

    //для стабильного возврата назад(идем по сохрненному пути from | запасной /questions)
    const handleBack = () => navigate(state?.from ?? "/questions");

    const showSkeleton = (isLoading || isFetching) && !currentData;

    return {
        data: currentData,
        ui: {
            showSkeleton,
            isOpen,
            error,
        },
        actions: {
            handleBack,
            toggle,
            close,
        },
    };
};
