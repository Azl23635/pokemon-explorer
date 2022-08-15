import { useState } from 'react';
import './App.css';
import GeneratePokemon from './GeneratePokemon';
import ViewPokemon from './ViewPokemon';
import Logo from './Logo';

function App() {
  const [pokeArr, setPoke] = useState([]);
  const [isOpaque, setOpacity] = useState('isOpaque');
  const [imgLoad, setLoaded] = useState(false);
  return (
    <div className="App">
      <Logo />
      <GeneratePokemon
        pokeArr={pokeArr}
        setPoke={setPoke}
        setOpacity={setOpacity}
        imgLoad={imgLoad}
        setLoaded={setLoaded}
      />
      <ViewPokemon
        pokeArr={pokeArr}
        isOpaque={isOpaque}
        setLoaded={setLoaded}
      />
    </div>
  );
}

export default App;
