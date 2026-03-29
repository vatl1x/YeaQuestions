import { createContext, useContext, useState, type ReactNode } from "react";

export interface IFiltersContext {
    isQuestionsLoading: boolean;
    setIsQuestionsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FiltersProviderProps {
    children: ReactNode;
}
const FiltersContext = createContext<IFiltersContext | undefined>(undefined);

export const useFilters = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error("context error");
    }
    return context;
};

export const FiltersProvider = ({ children }: FiltersProviderProps) => {
    const [isQuestionsLoading, setIsQuestionsLoading] = useState(false);

    return (
        <FiltersContext.Provider
            value={{
                isQuestionsLoading,
                setIsQuestionsLoading,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};
