import React from "react";
import PropTypes from 'prop-types';
import Recipe from "./recipe";


const RecipeList = (props) => {
// props is going to an array of objects
    const recipeComponentsArray = props.recipes.map((recipe) => {
        return (
            <Recipe
                key={recipe.id}
                name={recipe.name}
                ingredients={recipe.ingredients}
                mealType={recipe.mealType}
            />
        )
    })

    return (
        <>
            <h2>Recipe Count: {props.recipes.length}</h2>
            <section>
                <ul class="container">{recipeComponentsArray}</ul>
            </section>
        </>
    )

}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default RecipeList;