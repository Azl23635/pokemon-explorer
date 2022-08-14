const ViewPokemon = ({ pokeArr }) => {
  //generatePokeUi: Maps through pokemon array
  const mapPoke = pokeArr.map((elem, index) => (
    //For each, construct DIV, child IMG, H3, etc...
    <div
      key={`pokeFig${index}`}
      id={`pokeFig${index}`}
      className="individualPokeItem"
    >
      <h3 className="pokeNames">
        {elem.name[0].toUpperCase() + elem.name.slice(1)}
      </h3>
      <img
        src={elem.spriteUrl}
        alt={`The official artwork of ${elem.name}`}
      />
      <p className="type">{elem.type.toUpperCase()}</p>
      <p className="pokeStats">HP: {elem.hp}</p>
      <p className="pokeStats">Attack: {elem.attack}</p>
      <p className="pokeStats">Defense: {elem.defense}</p>
    </div>
  ));

  //Return: DIV child: FIGURE
  return <div className="allPokeItems">{mapPoke}</div>;
};
export default ViewPokemon;
