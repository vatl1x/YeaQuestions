import { RouterProvider } from "react-router-dom";
import router from "../config/routes";

export function AppRouter() {
    return <RouterProvider router={router} />;
}
