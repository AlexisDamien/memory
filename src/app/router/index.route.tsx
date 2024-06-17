import { RouteObject } from "react-router-dom";
import Layout from "../../common/components/Layout";
import ThemePage from "../../features/theme/pages/ThemePage/theme-page.component";
import {CategoriePage} from "../../features/categorie/pages/CategoriePage";

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
                path: "/categorie",
                element: <CategoriePage/>,
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
                element: <div>Paramètres</div>,
            }
        ],
    },


];