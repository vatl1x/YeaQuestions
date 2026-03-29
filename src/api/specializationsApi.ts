import axios from "axios";
import { BASE_URL } from "../constants/api";
import type { SpecializationApiResponse } from "../types/specialization";

export const getSpecializations =
    async (): Promise<SpecializationApiResponse> => {
        try {
            const response = await axios.get(`${BASE_URL}/specializations`);
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
