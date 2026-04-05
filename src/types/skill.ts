export interface Skill {
    id: number;
    title: string;
    imageSrc: string | null;
}

export interface SkillsParams {
    page?: number;
    limit?: number;
    title?: string;
    specializationId?: number | null;
}

export interface SkillsApiResponse {
    data: Skill[];
    total: number;
    page: number;
    limit: number;
}