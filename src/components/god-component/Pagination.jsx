import { useContext } from "react";
import { Scheme } from "./SchemeProvider";
import style from "./styles/nav.module.css";

export default function Nav({
  result,
  next,
  previous,
  currentPokemon,
  setCurrentPokemon,
}) {
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
            onClick={() =>
              setCurrentPokemon({ name: item.name, url: item.url })
            } //change active pokemon
            style={{
              backgroundColor:
                item.name === currentPokemon.name
                  ? scheme.scheme.color === "white"
                    ? "lightgray"
                    : "white"
                  : "rgba(200, 200, 200, 0.3)",
              color:
                item.name === currentPokemon.name
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
