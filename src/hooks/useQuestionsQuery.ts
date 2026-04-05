import { useLocation, useNavigate } from "react-router-dom";
import { toNumberArray, toPositiveNumber } from "../utils/QueryParams";

export interface IQuery {
    page: number;
    limit: number;
    title: string;
    specializationId: number | null;
    skills?: number[];
    complexity?: number[];
    rate?: number[];
}

export const useQuestionsQuery = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const navigate = useNavigate();

    const query: IQuery = {
        page: toPositiveNumber(params.get("page"), 1),
        limit: toPositiveNumber(params.get("limit"), 10),
        title: params.get("title") ?? "",
        specializationId: toPositiveNumber(
            params.get("specializationId"),
            null,
        ),
        skills: toNumberArray(params.get("skills")),
        complexity: toNumberArray(params.get("complexity")),
        rate: toNumberArray(params.get("rate")),
    };

    const setQuery = (filters: IQuery) => {
        const params = new URLSearchParams();

        if (filters.page > 1) {
            params.set("page", String(filters.page));
        }
        if (filters.title) {
            params.set("title", filters.title);
        }
        if (filters.specializationId) {
            params.set("specializationId", String(filters.specializationId));
        }
        if (filters.skills?.length) {
            params.set("skills", filters.skills.join(","));
        }
        if (filters.complexity?.length) {
            params.set("complexity", filters.complexity.join(","));
        }
        if (filters.rate?.length) {
            params.set("rate", filters.rate.join(","));
        }

        navigate({ search: params.toString() }, { replace: true });
    };
    return { query, setQuery };
};
