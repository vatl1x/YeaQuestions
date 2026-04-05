import { createContext, useContext, useState, type ReactNode } from "react";
import { useSpecialization } from "../hooks/useSpecialization";
import type { Specialization } from "../types/specialization";

export interface IFiltersContext {
    isQuestionsLoading: boolean;
    setIsQuestionsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    specializations: Specialization[] | undefined;
    isSpecializationsLoading: boolean;
    questionSlugs: string[];
    setQuestionSlugs: React.Dispatch<React.SetStateAction<string[]>>;
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
    const [questionSlugs, setQuestionSlugs] = useState<string[]>([]);
    const { specializations, isLoading: isSpecializationsLoading } =
        useSpecialization();

    return (
        <FiltersContext.Provider
            value={{
                isQuestionsLoading,
                setIsQuestionsLoading,
                specializations,
                isSpecializationsLoading,
                questionSlugs,
                setQuestionSlugs,
            }}
        >
            {children}
        </FiltersContext.Provider>
    );
};
