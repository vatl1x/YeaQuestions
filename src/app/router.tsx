import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { universalPage } from "../pages/UniversalPage/universalPage.constants";
import { PATHS } from "../constants/routes";

const router = createBrowserRouter([
    {
        path: PATHS.HOME,
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: PATHS.QUESTIONS,
                lazy: async () => {
                    const { default: Component } =
                        await import("../pages/QuestionsPage/QuestionsPage");
                    return { Component };
                },
            },
            {
                path: PATHS.DETAILED_QUESTION,
                lazy: async () => {
                    const { default: Component } =
                        await import("../pages/DetailedQuestionsPage/DetailedQuestionPage");
                    return { Component };
                },
            },
            {
                path: PATHS.LOGIN,
                lazy: async () => {
                    const { default: Component } =
                        await import("../pages/LoginPage/LoginPage");
                    return { Component };
                },
            },
            {
                path: PATHS.REGISTRATION,
                lazy: async () => {
                    const { default: Component } =
                        await import("../pages/RegisterPage/RegisterPage");
                    return { Component };
                },
            },

            ...universalPage.map(({ path, title }) => ({
                path: path,
                lazy: async () => {
                    const { default: UniversalPage } =
                        await import("../pages/UniversalPage/UniversalPage");
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
