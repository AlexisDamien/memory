import { RouteObject } from "react-router-dom";
import Layout from "../../common/components/Layout";
import ThemePage from "../../features/theme/pages/ThemePage/theme-page.component";

export const routes: Array<RouteObject> = [
    {
        path: "/",
        element:<Layout />,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
            {
                path: "/theme",
                element: <ThemePage/>,
            },
            {
                path: "/reminders",
                element: <div>Rappel</div>,
            },
            {
                path: "/settings",
                element: <div>Paramètre</div>,
            }
        ],
    },


];