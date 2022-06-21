import "./App.css";
import React, { useState } from "react";
import RecipeList from "./components/recipeList";
import recipeData from "./data/recipeData.json";

function App() {
    const [recipes, setRecipes] = useState(recipeData);

    const onDelete = (name) => {
        const newRecipes = recipes.filter((recipe) => {
            return recipeData.name !== name;
        });

        setRecipes(newRecipes);
    };

    return (
        <main>
            <h1>Recipe App</h1>
            <RecipeList recipes={recipes} onDelete={onDelete} />
        </main>
    );
}

export default App;
