import { useState, useEffect } from "react";
import Header from "./Header";
import View from "./View";
import ErrorHandler from "./ErrorBoundary";
import Pagination from "./Pagination";
import usePokePaginate from "./usePaginate";
import style from "./styles/base.module.css";

//

export default function Main() {
  //see (usePaginate.js) to view full description of this (custom hooks)
  const [result, previous, next] = usePokePaginate(
    "https://pokeapi.co/api/v2/pokemon"
  );

  //by default the first element should be (bulbasaur)
  const [pokemon, setPokemon] = useState({
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/bulbasaur",
  });

  useEffect(() => {
    ///
  }, [result]);

  return (
    <div className={style.wrapper}>
      <Header />
      <ErrorHandler fallback={<p>Loading...</p>}>
        <View url={pokemon.url} />
      </ErrorHandler>
      <ErrorHandler fallback={<p>loading...</p>}>
        <Pagination
          result={result}
          next={next}
          previous={previous}
          currentPokemon={pokemon}
          setCurrentPokemon={setPokemon}
        />
      </ErrorHandler>
    </div>
  );
}
