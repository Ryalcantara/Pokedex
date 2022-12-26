import { createContext, useState, useEffect } from "react";

export const Scheme = createContext();
export const Pokemon = createContext();
export const Dimension = createContext();

export default (props) => {
  const [dimension, setDimension] = useState(getWindowDimension());
  const [pokemon, setPokemon] = useState({
    id: "0",
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1",
    color: "green",
  });

  function handlePageResize() {
    setDimension(getWindowDimension());
  }

  useEffect(() => {
    window.addEventListener("resize", handlePageResize);
    return () => {
      window.removeEventListener("resize", handlePageResize);
    };
  }, []);

  return (
    <Dimension.Provider value={dimension}>
      <Pokemon.Provider value={{ pokemon, setPokemon }}>
        {props.children}
      </Pokemon.Provider>
    </Dimension.Provider>
  );
};

function getWindowDimension() {
  const { innerHeight, innerWidth } = window;
  return { height: innerHeight, width: innerWidth };
}
