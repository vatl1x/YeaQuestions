import { baseApi } from "@/shared/api/baseApi";
import type {
    QuestionApiResponse,
    QuestionsParams,
    DetailedQuestion,
} from "../model/types";

export const questionsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query<
            QuestionApiResponse,
            QuestionsParams | void
        >({
            query: (params) => ({
                url: "/questions/public-questions",
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
            }),
            providesTags: ["Question"],
        }),
        getQuestionBySlug: builder.query<DetailedQuestion, string>({
            query: (slug) => ({
                url: `/questions/by-slug/${slug}`,
            }),
            providesTags: ["QuestionBySlug"],
        }),
    }),
});

export const { useGetQuestionsQuery, useGetQuestionBySlugQuery } = questionsApi;
