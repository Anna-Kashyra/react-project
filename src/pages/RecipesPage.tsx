import React, {useEffect, useState} from 'react';
import Pagination from "../components/pagination/Pagination";
import {apiService} from "../services/api.service";
import {useSearchParams} from "react-router-dom";
import Recipes from "../components/recipes/Recipes";
import {IRecipe} from "../models/IRecipe";

const RecipesPage = () => {

    const [query, setQuery] = useSearchParams({page: '1'});
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [isLastPage, setIsLastPage] = useState<boolean>(false);
    const [isFirstPage, setIsFirstPage] = useState<boolean>(true);


    useEffect(() => {
        const page = query.get('page');
        if (page) {
            setIsFirstPage(+page === 1);
            apiService.recipe
                .getAll(+page)
                .then(data => {
                    setRecipes(data.recipes);
                    const itemsOnPage = data.recipes.length;
                    if (itemsOnPage < 10 || (data.skip + itemsOnPage) >= data.total) {
                        setIsLastPage(true); // Заблокувати кнопку Next
                    } else {
                        setIsLastPage(false); // Дозволити кнопку Next
                    }
                })
        }

    }, [query]);

    return (
        <div>
            <Recipes recipes={recipes}/>
            <Pagination isFirstPage={isFirstPage} isLastPage={isLastPage}/>
        </div>
    );
};

export default RecipesPage;