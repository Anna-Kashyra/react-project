import axios from "axios";
import {IRecipe} from "../models/IRecipe";
import {IRecipesResponse} from "../models/IRecipesResponse";

const axiosInstance = axios.create ({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"}
})

export const apiService = {
    recipe: {
        getAll: async (page: number): Promise<IRecipesResponse & {recipes: IRecipe[]}> => {
            const skip = (page - 1) * 10;
            const limit = 10;

            const {data} = await axiosInstance.get<IRecipesResponse & {recipes: IRecipe[]}>('/recipes', {
                params: {
                    skip: skip,
                    limit: limit
                }

            })
            return data;
        }
    }
}