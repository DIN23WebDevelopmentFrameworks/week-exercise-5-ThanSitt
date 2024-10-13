import React from 'react'
import { IRecipe } from './IRecipe';
import Recipe from './Recipe';

interface IRecipeListProps {
    recipes: IRecipe[];
    onBack: () => void;
}

export default function RecipeList({recipes, onBack}: IRecipeListProps) {
  return (
    <div>
        <button onClick={onBack}>Back</button>
        {recipes.map((recipe) => {
            return <Recipe key={recipe.id} recipeData={recipe} />
        })}
    </div>
  )
}