import TopBar from "./components/Topbar";
import List from "./components/List";
import Pokeball from "./components/Pokeball";
import Preview from "./components/View";
import "./styles/index.css";
import { useState } from "react";

import { useContext } from "react";
import { Pokemon } from "./Provider";
///
export default () => {
  const [showPokemon, setShowPokemon] = useState(false);
  const { pokemon } = useContext(Pokemon);
  return (
    <div className="root">
      <div className="affixed-bg">
        <Pokeball fill={"#ececec"} />
      </div>
      <div className="wrapper">
        <TopBar setShowPokemon={setShowPokemon} />
        <div className="content">
          <List setShowPokemon={setShowPokemon} />
          <Preview
            url={pokemon.url}
            showPokemon={showPokemon}
            setShowPokemon={setShowPokemon}
          />
        </div>
      </div>
    </div>
  );
};
