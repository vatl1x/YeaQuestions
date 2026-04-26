import { PATHS } from "@/shared/config/routePaths";
import type { UniversalPageRoute } from "./types";

export const universalRoutes: UniversalPageRoute[] = [
    { path: PATHS.TRAINER, title: "тренажера" },
    { path: PATHS.MATERIALS, title: "материалов" },
    { path: PATHS.SKILLS, title: "навыков" },
    { path: PATHS.DOCS, title: "с документами" },
    { path: PATHS.MEDIA, title: "с нашими медиа" },
];
