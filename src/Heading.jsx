const Heading = () => {
  return (
    <div className="logoContainer">
      <div className="headings">
        <img
          className="pokeLogo"
          src="pokemonLogo.png"
          alt="pokemon logo"
        />
        <h1>Random Generator</h1>
        <div className="container">
          <div className="wrapper">
            <h3>
              Do <em>you</em> know all the Pokemon?
            </h3>
            <p>
              Generate random pokemon to increase your knowledge. See
              if you can find <b>Rayquaza</b>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Heading;
