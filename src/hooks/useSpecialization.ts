    import { useEffect, useState } from "react";
    import { getSpecializations } from "../api/specializationsApi";
    import type { SpecializationApiResponse } from "../types/specialization";

    export const useSpecialization = () => {
        const [data, setData] = useState<SpecializationApiResponse | null>(null);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);

        useEffect(() => {
            setIsLoading(true);
            (async () => {
                try {
                    const response = await getSpecializations();
                    setData(response);
                } catch {
                    setError(`Ошибка загрузки`);
                } finally {
                    setIsLoading(false);
                }
            })();
        }, []);

        const specializations = data?.data;

        return { specializations, isLoading, error };
    };
