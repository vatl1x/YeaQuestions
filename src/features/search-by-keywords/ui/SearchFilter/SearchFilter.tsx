import { Skeleton } from "@/shared/ui/Skeleton";
import { useSearchFilter } from "../../model/useSearchFilter";
import search from "@/shared/assets/icons/search.svg";
import styles from "./SearchFilter.module.scss";

interface Props {
    isLoading: boolean;
}

export const SearchFilter = ({ isLoading }: Props) => {
    const { value, setValue } = useSearchFilter();

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
