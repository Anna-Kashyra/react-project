import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/mainlayout/MainLayout";
import HomePage from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true, element: <HomePage/>
            },
            {
                path: 'recipes',
                element: <RecipesPage/>
            }
        ]
    }
]);