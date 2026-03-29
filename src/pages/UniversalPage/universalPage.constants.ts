import { PATHS } from "../../constants/routes";
import type { UniversalPageRoute } from "./universalPage.types";

export const universalPage: UniversalPageRoute[] = [
    { path: PATHS.TRAINER, title: "тренажера" },
    { path: PATHS.MATERIALS, title: "материалов" },
    { path: PATHS.SKILLS, title: "навыков" },
    { path: PATHS.DOCS, title: "с документами" },
    { path: PATHS.MEDIA, title: "с нашими медиа" },
    { path: PATHS.DETAILED_QUESTION, title: "ПОДРОБНЫЙ ВОПРОС" },
];
