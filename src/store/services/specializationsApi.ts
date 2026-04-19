import type { SpecializationApiResponse } from "../../types/specialization";
import { baseApi } from "./baseApi";

export const specializationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpecializations: builder.query<SpecializationApiResponse, void>({
            query: () => "/specializations",
            providesTags: ["Specialization"],
        }),
    }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
