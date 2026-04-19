import { baseApi } from "./baseApi";
import type { SkillsApiResponse, SkillsParams } from "../../types/skill";


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
