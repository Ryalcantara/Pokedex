import { useContext } from "react";
import { Scheme } from "./SchemeProvider";
import { Pokemon } from "./Base";
import style from "./styles/nav.module.css";

export default function Nav({ result, next, previous }) {
  const pokemonContext = useContext(Pokemon);
  const scheme = useContext(Scheme);
  return (
    <nav className={style.nav}>
      <button
        onClick={() => previous()}
        className={style.button}
        style={{ backgroundColor: scheme.scheme.color }}
      >
        PREV
      </button>
      <div className={style["pokelist"]}>
        {result?.map((item) => (
          <span
            className={style["nav-item"]}
            key={item.url}
            onClick={
              () =>
                pokemonContext.setPokemon({ name: item.name, url: item.url })
              // setCurrentPokemon({ name: item.name, url: item.url })
            } //change active pokemon
            style={{
              backgroundColor:
                item.name === pokemonContext.pokemon.name
                  ? scheme.scheme.color === "white"
                    ? "lightgray"
                    : "white"
                  : "rgba(200, 200, 200, 0.3)",
              color:
                item.name === pokemonContext.pokemon.name
                  ? scheme.scheme.color === "white"
                    ? "gray"
                    : scheme.scheme.color
                  : "",
            }}
          >
            {item.name}
          </span>
        ))}
      </div>
      <button
        onClick={() => next()}
        className={style.button}
        style={{ backgroundColor: scheme.scheme.color }}
      >
        NEXT
      </button>
    </nav>
  );
}
