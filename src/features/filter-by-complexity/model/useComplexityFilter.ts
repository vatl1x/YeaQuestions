import { useQuestionsQuery } from "@/entities/question/model/useQuestionsQuery";

export const useComplexityFilter = () => {
    const { query, setQuery } = useQuestionsQuery();

    const toggleComplexity = (complexityValues: number[]) => {
        const currentComplexity = query.complexity ?? [];
        const isActive = complexityValues.some((value) =>
            currentComplexity?.includes(value),
        );

        setQuery({
            ...query,
            complexity: isActive
                ? currentComplexity.filter(
                      (value) => !complexityValues?.includes(value),
                  )
                : [...currentComplexity, ...complexityValues],
            page: 1,
        });
    };
    return { query, toggleComplexity };
};
