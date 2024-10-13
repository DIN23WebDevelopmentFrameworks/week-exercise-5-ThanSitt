import React from 'react'
import { IRecipe } from './IRecipe';

interface IRecipeProps {
    recipeData: IRecipe;
}

export default function Recipe({recipeData}: IRecipeProps) {
  return (
    <div>
        <h2>{recipeData.name}</h2>
        <h3>Ingredients</h3>
        <ul>
            {recipeData.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>
            })}
        </ul>
        <h3>Instructions</h3>
        <ol>
            {recipeData.instructions.map((instruction) => {
                return <li>{instruction}</li>
            })}
        </ol>
    </div>
  )
}