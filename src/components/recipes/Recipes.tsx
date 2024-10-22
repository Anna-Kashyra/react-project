import React, {FC} from 'react';
import {IRecipe} from "../../models/IRecipe";
import styles from './Recipes.module.css';

type RecipesProps = {
    recipes: IRecipe[];
}
const Recipes: FC<RecipesProps>= ({recipes}) => {
    return (
        <div>
            {
                recipes.map(recipe => (
                    <div key={recipe.id}>
                        <h1>Recipe {recipe.id}: {recipe.name}</h1>
                        <div className={styles.recipe_inner}>
                            <img className={styles.img} src={recipe.image} alt={`Image of ${recipe.name}`}/>
                            <div className={styles.recipe_info}>
                                <div className={styles.recipe_info_top}>
                                    <ul>
                                        <p><strong>Ingredients:</strong></p>
                                        {recipe.ingredients.map((ingr, index) => (
                                            <li key={index}>{ingr}</li>
                                        ))}
                                    </ul>
                                    <ul>
                                        <p><strong>Instructions:</strong></p>
                                        {recipe.instructions.map((instr, index) => (
                                            <li key={index}>{instr}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.recipe_info_middle}>
                                    <div><p><i>Prepare Time:</i> {recipe.prepTimeMinutes} min</p>
                                        <p><i>Cook Time:</i> {recipe.cookTimeMinutes} min</p>
                                        <p><i>Difficulty:</i> {recipe.difficulty}</p>
                                        <p><i>Servings:</i> {recipe.servings}</p>
                                        <p><i>Calories Per Serving:</i> {recipe.caloriesPerServing}</p>
                                    </div>
                                    <div><p><i>Cuisine:</i> {recipe.cuisine}</p>
                                        <p><i>Meal Type:</i> {recipe.mealType.join(', ')}</p>
                                        <p><i>Tags:</i> {recipe.tags.join(', ')}</p>
                                    </div>
                                </div>
                                <div className={styles.recipe_info_bottom}>
                                    <p><i>Rating:</i> {recipe.rating}</p>
                                    <p><i>Review Count:</i> {recipe.reviewCount}</p>
                                    <p><i>Published By:</i> User {recipe.userId}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Recipes;