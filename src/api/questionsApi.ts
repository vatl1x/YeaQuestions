import axios from "axios";
import { BASE_URL } from "../constants/api";
import type { QuestionApiResponse, QuestionsParams } from "../types/question";

export const getQuestions = async (
    params?: QuestionsParams,
): Promise<QuestionApiResponse> => {
    try {
        const response = await axios.get(
            `${BASE_URL}/questions/public-questions`,
            {
                params: {
                    page: params?.page ?? 1,
                    limit: params?.limit ?? 10,
                    skillFilterMode: "ANY",
                    specializationId: params?.specializationId ?? undefined,
                    skills: params?.skills?.length
                        ? params?.skills?.join(",")
                        : undefined,
                    complexity: params?.complexity?.length
                        ? params?.complexity?.join(",")
                        : undefined,
                    rate: params?.rate?.length
                        ? params?.rate?.join(",")
                        : undefined,
                    title: params?.title?.length ? params?.title : undefined,
                },
            },
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
