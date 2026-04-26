export interface QuestionSkill {
    id: number;
    title: string;
    imageSrc: string | null;
}

export interface Question {
    title: string;
    slug: string;
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

export interface QuestionNavigationState {
    slugs?: string[];
    index?: number;
    from?: string;
}

export interface DetailedQuestion {
    id: number;
    slug: string;
    title: string;
    description: string;
    imageSrc: string | null;
    shortAnswer: string;
    longAnswer: string;
    rate: number;
    complexity: number;
    keywords: string[];
    createdBy: {
        id: string;
        username: string;
    };

    questionSkills: QuestionSkill[];
}
