import { useState } from 'react';
import './App.css';
import Router from './routes/Router';
import { ContextRecipes } from './services/context';

function App() {
  const [recipes, setRecipes] = useState([]);

  const globalRecipes = {
    state: recipes,
    setter: setRecipes,
  }

  return (
    <div className="App">
      <ContextRecipes.Provider value={globalRecipes}>
        <Router/>
      </ContextRecipes.Provider>

    </div>
  );
}

export default App;
