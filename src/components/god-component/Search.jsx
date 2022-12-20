import usePokeSearch from "./useSearch";
import { useState, useRef } from "react";
import style from "./styles/search.module.css";

export default function Search({ setActivePokemon }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, search] = usePokeSearch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );

  const inputRef = useRef(null);

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
          ref={inputRef}
        />
        {searchQuery.length > 0 ? (
          <BuildResult data={result} setActivePokemon={setActivePokemon} />
        ) : null}
      </div>
    </>
  );
}

function BuildResult({ data, setActivePokemon }) {
  function onClick(info) {
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
