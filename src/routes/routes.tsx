import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import MainPage from "../pages/main/MainPage";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import React from "react";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorLayout/>,
        children:[
            {
                index: true, element: <MainPage/>
            },
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            }
        ]
    }
]);