import { useState } from 'react';
import './App.css';
import GeneratePokemon from './GeneratePokemon';
import ViewPokemon from './ViewPokemon';

function App() {
  const [pokeArr, setPoke] = useState([]);

  return (
    <div className="App">
      <GeneratePokemon pokeArr={pokeArr} setPoke={setPoke} />
      <ViewPokemon pokeArr={pokeArr} />
    </div>
  );
}

export default App;
