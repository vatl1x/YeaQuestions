import { useState, useRef, useEffect } from "react";
import { useQuestionsQuery } from "@/entities/question/model/useQuestionsQuery";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";

export const useSearchFilter = () => {
    const { query, setQuery } = useQuestionsQuery();
    const [value, setValue] = useState(query.title);
    const debounceValue = useDebounce(value, 1500);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (debounceValue === query.title) {
            return;
        }

        setQuery({ ...query, title: debounceValue, page: 1 });
    }, [debounceValue]);

    //очищает инпут при сбросе фильтров
    useEffect(() => {
        setValue(query.title);
    }, [query.title]);

    return { value, setValue };
};
