import React from "react";
import Recipe from "./recipe";
import PropTypes from "prop-types";

const RecipeList = (props) => {
    // PART 1: BRAINS
    // props is going to an array of objects
    const recipeComponentsArray = props.recipes.map((recipe, index) => {
        return (
            <Recipe
                key={index} /*You need a key for sibling components*/
                name={recipe.name}
                ingredients={recipe.ingredients}
                // mealType={recipe.mealType}
                onDelete={props.onDelete}
            />
        );
    });

    // PART 2: BEAUTY creaes the visual part of a component
    return (
        <>
            <h2>Recipe Count: {props.recipes.length}</h2>
            <section>
                <ul className="container">{recipeComponentsArray}</ul>
            </section>
        </>
    );
    // <h1>I'm in recipeList</h1>;
};

RecipeList.propType = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default RecipeList;
