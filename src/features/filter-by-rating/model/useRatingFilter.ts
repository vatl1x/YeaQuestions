import { useQuestionsQuery } from "@/entities/question/model/useQuestionsQuery";

export const useRatingFilter = () => {
    const { query, setQuery } = useQuestionsQuery();

    const toggleRate = (value: number) => {
        const currentRate = query.rate ?? [];
        const isActive = currentRate.includes(value);

        setQuery({
            ...query,
            rate: isActive
                ? currentRate.filter((rate) => rate !== value)
                : [...currentRate, value],
            page: 1,
        });
    };
    return { query, toggleRate };
};
