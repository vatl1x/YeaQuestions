import { useEffect } from "react";
import { scrollToTop } from "../helpers/scrollToTop";

export const useScrollToTop = (dependence: unknown) => {
    useEffect(() => {
        //прокрутка и ждем чтоб все прогрузилось, иначе лагает
        const timeout = setTimeout(scrollToTop, 100);
        return () => clearTimeout(timeout);
    }, [dependence]);
};
