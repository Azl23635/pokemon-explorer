import { useEffect } from 'react';

const GeneratePokemon = ({
  pokeArr,
  setPoke,
  setOpacity,
  imgLoad,
  setLoaded,
}) => {
  //Fetch random pokemon's data from API
  const genPokeId = () => Math.floor(Math.random() * 905) + 1;

  const POKE_URL = `https://pokeapi.co/api/v2/pokemon/`;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const getPoke = async () => {
    const randomPokeUrl = `${POKE_URL}${genPokeId()}/`;
    const response = await fetch(randomPokeUrl);
    const data = await response.json();
    return data;
  };
  //
  //Format raw data
  const formatPokeData = (data) => {
    const formattedData = {
      name: [data][0].name,
      hp: [data][0]['stats'][0]['base_stat'],
      attack: [data][0]['stats'][1]['base_stat'],
      defense: [data][0]['stats'][2]['base_stat'],
      type: [data][0].types[0]['type']['name'],

      spriteUrl: [data][0].sprites.other['official-artwork'][
        'front_default'
      ],
    };
    return formattedData;
  };
  useEffect(() => {
    imgLoad ? setOpacity('isOpaque') : null;
  }, [imgLoad]);

  const handleGenerate = async () => {
    setOpacity('notOpaque');
    setLoaded(false);
    let pokemonData = await getPoke();
    let formattedPokemonData = await formatPokeData(pokemonData);

    await sleep(150);
    await setOpacity('translateMiddle');
    await sleep(10);
    if (pokeArr.length < 3) {
      await setPoke([formattedPokemonData].concat(pokeArr));
    } else {
      await setPoke(
        [formattedPokemonData].concat(pokeArr.slice(0, 2))
      );
    }
  };

  return (
    <div className="headings headings-btn">
      <button
        type="button"
        className="gen-btn"
        onClick={handleGenerate}
      >
        Generate
      </button>
    </div>
  );
};

export default GeneratePokemon;
