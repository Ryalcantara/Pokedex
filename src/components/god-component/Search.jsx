import usePokeSearch from "./useSearch";
import { useState, useContext } from "react";
import { Pokemon } from "./Base";
import style from "./styles/search.module.css";

export default function Search() {
  const pokemonContext = useContext(Pokemon);
  const [searchQuery, setSearchQuery] = useState("");
  const [result, search] = usePokeSearch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  function onSearch(e) {
    setSearchQuery(e.target.value);
    search(e.target.value);
  }

  return (
    <>
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
            setActivePokemon={pokemonContext.setPokemon}
            query={searchQuery}
            setQuery={setSearchQuery}
          />
        ) : null}
      </div>
    </>
  );
}

function BuildResult({ data, setActivePokemon, query, setQuery }) {
  function onClick(info) {
    setQuery("");
    setActivePokemon({ ...info });
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
