import "../styles/topbar.css";
import Search from "../components/Search";

export default ({ setShowPokemon }) => {
  return (
    <div className="topbar-wrapper">
      <h1>POKEDEX</h1>
      <div>
        <Search setShowPokemon={setShowPokemon} />
      </div>
    </div>
  );
};
