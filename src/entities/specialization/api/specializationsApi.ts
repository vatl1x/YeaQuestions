import { baseApi } from "@/shared/api/baseApi";
import { SpecializationApiResponse } from "../model/types";

export const specializationsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpecializations: builder.query<SpecializationApiResponse, void>({
            query: () => "/specializations",
            providesTags: ["Specialization"],
        }),
    }),
});

export const { useGetSpecializationsQuery } = specializationsApi;
