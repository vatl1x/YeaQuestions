export interface Specialization {
    id: number;
    title: string;
    slug: string;
}

export interface SpecializationApiResponse {
    data: Specialization[];
    total: number;
    page: number;
    limit: number;
}
