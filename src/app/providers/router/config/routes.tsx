import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "@/app/layouts/BaseLayout";
import { ErrorPage } from "@/pages/error";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { universalRoutes } from "@/pages/universal/model/constants";
import { PATHS } from "@/shared/config/routePaths";

const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: PATHS.QUESTIONS,
                lazy: async () => {
                    const { QuestionsPage } = await import("@/pages/questions");
                    return { Component: QuestionsPage };
                },
            },
            {
                path: PATHS.DETAILED_QUESTION,
                lazy: async () => {
                    const {  DetailedQuestionPage } =
                        await import("@/pages/detailedQuestion");
                    return { Component: DetailedQuestionPage };
                },
            },
            {
                path: PATHS.LOGIN,
                lazy: async () => {
                    const { LoginPage } = await import("@/pages/login");
                    return { Component: LoginPage };
                },
            },
            {
                path: PATHS.REGISTRATION,
                lazy: async () => {
                    const { RegisterPage } = await import("@/pages/register");
                    return { Component: RegisterPage };
                },
            },

            ...universalRoutes.map(({ path, title }) => ({
                path: path,
                lazy: async () => {
                    const { UniversalPage } = await import("@/pages/universal");
                    return {
                        Component: () => <UniversalPage pageTitle={title} />,
                    };
                },
            })),
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default router;
