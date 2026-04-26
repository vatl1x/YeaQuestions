import { useLocation, useNavigate } from "react-router-dom";
import type { QuestionNavigationState } from "@/entities/question/model/types";

export const useQuestionNavigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const state = location.state as QuestionNavigationState | null;
    const slugs = state?.slugs ?? [];
    const index = state?.index ?? -1;

    const prevSlug = index > 0 ? slugs[index - 1] : null;

    const nextSlug =
        index >= 0 && index < slugs.length - 1 ? slugs[index + 1] : null;

    const handlePrevSlug = () => {
        navigate(`/questions/${prevSlug}`, {
            replace: true,
            state: { slugs, index: index - 1, from: state?.from },
        });
    };

    const handleNextSlug = () => {
        navigate(`/questions/${nextSlug}`, {
            replace: true,
            state: { slugs, index: index + 1, from: state?.from },
        });
    };
    return { prevSlug, nextSlug, handlePrevSlug, handleNextSlug };
};
