import './App.css';
import React, {useState} from 'react';
import recipeData from "./data/recipeData.json"

function App() {

  const [recipes, setRecipes] = useState(recipeData);
  return (
    <main>
      <h1>Recipe App</h1>
    </main>
  );
}

export default App;
