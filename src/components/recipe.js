import React from "react";

const Recipe = ({ name, ingredients, onDelete }) => {
    // props is going to an object with a list of ingredients
    //BRAINS
    const ingredientsElementsArray = ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
    });

    //BEAUTY
    return (
        <>
            <h3>{name}</h3>
            <h3>ingredients</h3>
            <ul>{ingredientsElementsArray}</ul>

            <button onClick={onDelete}>Delete Recipe</button>
        </>
    );
};

export default Recipe;
