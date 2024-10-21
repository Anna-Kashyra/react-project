import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import MainPage from "../pages/main/MainPage";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import SingleUserPage from "../pages/single-user/SingleUserPage";
import React from "react";
import SingleUserPosts from "../pages/singl-user-posts/SingleUserPosts";
import PostCommentsPage from "../pages/comments/PostsCommentsPage";

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
                path: 'users/:id',
                element: <SingleUserPage/>
            },
            {
                path: 'users/:id/posts',
                element: <SingleUserPosts/>,
                children: [
                    {
                        path: ':postId/comments',
                        element: <PostCommentsPage/>
                    },
                ]
            },
            {
                path: 'posts',
                element: <PostsPage/>,
            },

            {
                path: 'comments',
                element: <CommentsPage/>
            }
        ]
    }
]);