import {IResponseUsersModel} from "../models/IResponseUsersModel";
import {IResponsePostsModel} from "../models/IResponsePostsModel";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});

export const getUsers = async (): Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IResponseUsersModel>('/users');
    return axiosResponse.data.users;
}

export const getPostsOfUser = async (id: number): Promise<IPost[]> => {
        let axiosResponse = await axiosInstance.get<IResponsePostsModel>('/posts/user/' + id);
        return axiosResponse.data.posts
    }