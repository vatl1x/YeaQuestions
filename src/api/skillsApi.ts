import axios from "axios";
import { BASE_URL } from "../constants/api";
import type { SkillsApiResponse, SkillsParams } from "../types/skill";

export const getSkills = async (
    params: SkillsParams,
): Promise<SkillsApiResponse> => {
    try {
        const response = await axios.get(`${BASE_URL}/skills`, {
            params: {
                page: 1,
                limit: 10,
                specializations: params.specializationId
                    ? [params.specializationId]
                    : undefined,
            },
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
