import usePokeSearch from "../hooks/useSearch";
import { useState, useContext } from "react";
import { Pokemon, Dimension } from "../Provider";
import style from "../styles/search.module.css";

export default function Search({ setShowPokemon }) {
  const { pokemon, setPokemon } = useContext(Pokemon);
  const [searchQuery, setSearchQuery] = useState("");
  const [result, search] = usePokeSearch(
    "https://pokeapi.co/api/v2/pokemon?limit=10000000&offset=0"
  );

  function onSearch(e) {
    setSearchQuery(e.target.value);
    search(e.target.value);
  }

  return (
    <div className={style.container}>
      <input
        onChange={onSearch}
        value={searchQuery}
        className={style.input}
        placeholder="Search Pokemon"
      />
      {searchQuery.length > 0 ? (
        <BuildResult
          data={result}
          setActivePokemon={setPokemon}
          query={searchQuery}
          setQuery={setSearchQuery}
          setShowPokemon={setShowPokemon}
        />
      ) : null}
    </div>
  );
}

function BuildResult({
  data,
  setActivePokemon,
  query,
  setQuery,
  setShowPokemon,
}) {
  const { width } = useContext(Dimension);
  function onClick(info) {
    setTimeout(() => {
      setQuery("");
      setActivePokemon({ ...info });
      //
      if (width <= 600) {
        setShowPokemon(true);
      }
    }, 1000);
  }

  return (
    <div className={style["result-wrapper"]}>
      <div className={style["result-overflow"]} key={"something"}>
        {data.map((item) => {
          return (
            <div
              key={item.name}
              className={style["result-item"]}
              onClick={() => onClick(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
