import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { useQuestionsQuery } from "../../../hooks/useQuestionsQuery";
import Skeleton from "../../../ui/Skeleton/Skeleton";
import search from "../../../assets/icons/search.svg";
import styles from "./SearchFilter.module.scss";

interface Props {
    isLoading: boolean;
}

const SearchFilter = ({ isLoading }: Props) => {
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

    if (isLoading) {
        return (
            <Skeleton
                type="text"
                width="100%"
                height="50px"
                borderRadius="12px"
            />
        );
    }

    return (
        <label className={styles.searchValue} aria-label="Поиск">
            <img src={search} alt="" />
            <input
                type="text"
                value={value}
                placeholder="Введите текст"
                className={styles.searchInput}
                onChange={(e) => setValue(e.target.value)}
            />
        </label>
    );
};

export default SearchFilter;
