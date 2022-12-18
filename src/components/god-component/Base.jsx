import Style from "./styles/base.module.css";
import { useState, useEffect } from "react";
import View from "./View";
import ErrorHandler from "./ErrorBoundary";
import Pagination from "./Pagination";

//
export default function _() {
  //see at the bottom of code to view full description of this (custom hooks)
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
    <div id="base-wrapper" className={Style.base_wrapper}>
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

/**
 * @USEPOKEPAGINATE
 * use to paginate the list of pokemons
 * it takes the default url and returns
 * 1. result -> pokemon list e.g [{name: 'bulbasaur', url: 'https://pokeapi.co/....'}, {name: '', ...}]
 * 2. previous -> a function that triggers a previous section of pokemon
 * 3. next -> a function that triggers a next section of pokemon
 * @param {string} url
 * @returns
 */
function usePokePaginate(url) {
  const [paginateData, setPaginateData] = useState({ prev: null, next: null });
  const [result, setResult] = useState(null);

  useEffect(() => {
    //fetch the default data
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        //if successfull assign data
        setResult(res.results);
        setPaginateData({ prev: res.previous, next: res.next });
      });
  }, []);

  //goto next section
  function next() {
    if (paginateData.next) {
      fetch(paginateData.next)
        .then((res) => res.json())
        .then((res) => {
          setResult(res.results);
          setPaginateData({ next: res.next, prev: res.previous });
        });
    }
  }

  //goto prev section
  function previous() {
    if (paginateData.prev) {
      fetch(paginateData.prev)
        .then((res) => res.json())
        .then((res) => {
          setResult(res.results);
          setPaginateData({ prev: res.previous, next: res.next });
        });
    }
  }

  return [result, previous, next];
}
