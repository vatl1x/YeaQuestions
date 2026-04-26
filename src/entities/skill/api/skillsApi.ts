import { baseApi } from "@/shared/api/baseApi";
import { SkillsApiResponse, SkillsParams } from "../model/types";

export const skillsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query<SkillsApiResponse, SkillsParams>({
            query: (params) => ({
                url: "/skills",
                params: {
                    page: 1,
                    limit: 10,
                    specializations: params.specializationId
                        ? [params.specializationId]
                        : undefined,
                },
            }),
            providesTags: ["Skills"],
        }),
    }),
});

export const { useGetSkillsQuery } = skillsApi;
