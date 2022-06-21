import './App.css';
import React, {useState} from 'react';
import RecipeList from './components/recipeList';
import recipeData from "./data/recipeData.json"

function App() {

  const [recipes, setRecipes] = useState(recipeData);
  return (
    <main>
      <h1>Recipe App</h1>
      <RecipeList recipes={recipes}/>
    </main>
  );
}

export default App;
