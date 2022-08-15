const ViewPokemon = ({ pokeArr, isOpaque, setLoaded }) => {
  //Called when image loads
  const handleImgLoad = (index) => {
    if (index === 'pokeImg0') {
      setLoaded(true);
    }
  };

  //generatePokeUi: Maps through pokemon array
  const mapPoke = pokeArr.map((elem, index) => (
    //For each, construct DIV, child IMG, H3, etc...

    <a
      href={`https://pokemon.fandom.com/wiki/${elem.name}`}
      target="_blank"
      className="pokeLink"
      key={`pokeFig${index}`}
    >
      <div
        id={`pokeFig ${elem.name}`}
        name={elem.name}
        className={`individualPokeItem ${elem.type}`}
      >
        <h3 className="pokeNames">
          {elem.name[0].toUpperCase() + elem.name.slice(1)}
        </h3>
        <img
          src={elem.spriteUrl}
          alt={`The official artwork of ${elem.name}`}
          id={`pokeImg${index}`}
          onLoad={(e) => handleImgLoad(e.target.id)}
        />
        <p className="type">
          <u>{elem.type.toUpperCase()}</u>
        </p>
        <div id="statBox">
          <div className="statDiv">
            <img
              className="statIcons"
              src={'heart.svg'}
              alt="heart"
            />
            <p className="pokeStats">Health: </p>
            <p className="statVal">
              {elem.hp}
              <br />
            </p>
          </div>
          <div className="statDiv">
            <img
              className="statIcons"
              src={'attack.svg'}
              alt="attack"
            />
            <p className="pokeStats">Attack: </p>
            <p className="statVal">
              {elem.attack}
              <br />
            </p>
          </div>
          <div className="statDiv">
            <img
              className="statIcons"
              src={'defense.svg'}
              alt="defense"
            />

            <p className="pokeStats">Defense: </p>
            <p className="statVal">
              {elem.defense}
              <br />
            </p>
          </div>
        </div>
      </div>
    </a>
  ));

  //Return: DIV child: FIGURE
  return <div className={`allPokeItems ${isOpaque}`}>{mapPoke}</div>;
};
export default ViewPokemon;
