export interface Question{
    title:string;
    rate: number;
    complexity: number;
    shortAnswer: string;
}

export interface QuestionsParams {
    page?: number;
    limit?: number;
    title?: string;
    specializationId?: number | null;
    skills?: number[];
    complexity?: number[];
    rate?: number[];
}

export interface QuestionApiResponse {  
    data: Question[];
    total: number;
    page: number;
    limit: number;
}
