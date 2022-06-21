import React from "react";
import PropTypes from 'prop-types';


const Recipe = ({name, ingredients, mealType}) => {
// props is going to an object with a list of ingredients
    
    const ingredientList = ingredients.map((ingredient) => {
        return(
            <li>{ingredient}</li>
        )
    })

    return (
        <li class="recipes">
            <h3>{name}</h3>
            <h4>Ingredients:</h4>
                <ul>
                    {ingredientList}
                </ul>
            
            <h4>Meal Type: {mealType}</h4>
        </li>
    )

}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    mealType: PropTypes.string.isRequired
}

export default Recipe;