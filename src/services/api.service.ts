import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";
import axios from "axios";
import {BaseResponseType} from "../models/BaseResponseType";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const getUsers = async (): Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<BaseResponseType & {users: IUser[]}>('/users');
    return axiosResponse.data.users;
}

export const getPosts = async (): Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<BaseResponseType & {posts:IPost[]} >('/posts');
    return axiosResponse.data.posts
}

export const getComments = async (): Promise<IComment[]> => {
    let axiosResponse = await axiosInstance.get<BaseResponseType & {comments:IComment[]}>('/comments');
    return axiosResponse.data.comments
}

export const getPostsOfUser = async (id: number): Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get(`/posts/user/${id}`);
    return axiosResponse.data.posts;
};

export const getCommentsOfPost = async (postId: number): Promise<IComment[]> => {
    const response = await axios.get(`https://dummyjson.com/posts/${postId}/comments`);
    return response.data.comments;
}