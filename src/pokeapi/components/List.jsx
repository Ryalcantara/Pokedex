import "../styles/list.css";
import { useEffect, useRef, useState, useContext } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import usePaginate from "../hooks/usePaginate";
import PokemonIcon from "../components/Pokeball";
import { Pokemon, Dimension } from "../Provider";

export default ({ setShowPokemon }) => {
  const [result, prev, next] = usePaginate("https://pokeapi.co/api/v2/pokemon");
  const [currentList, setCurrentList] = useState(result);
  const ref = useRef(null);
  const visible = useIntersectionObserver(ref);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        next();
        setCurrentList([...currentList, ...result]);
      }, 1000);
    }
  }, [visible, result]);

  return (
    <div className="overflow-wrapper">
      <div className="overflow-content">
        <div className="grid-wrapper">
          {currentList?.map((item, idx) => (
            <ListItem
              name={item.name}
              url={item.url}
              key={idx}
              setShowPokemon={setShowPokemon}
            />
          ))}
          <p
            ref={ref}
            style={{
              columnSpan: "all",
              height: "50px",
              textAlign: "center",
              columnFill: "auto",
            }}
          >
            ...Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

function ListItem({ name, url, setShowPokemon }) {
  const { width } = useContext(Dimension);
  const { pokemon, setPokemon } = useContext(Pokemon);
  const [image, setImage] = useState(null);
  const [color, setColor] = useState(null);
  const [id, setId] = useState(0);
  const [pokename, setPokeName] = useState("");

  async function getInformation() {
    const pokemon = await (await fetch(url)).json();
    const species = await (await fetch(pokemon.species.url)).json();
    setPokeName(pokemon.name);
    setId(pokemon.id);
    setImage(pokemon.sprites.other["official-artwork"].front_default);
    setColor(species.color.name);
  }

  function onClicked() {
    setPokemon({
      id,
      name: pokename,
      url: url,
      color: color,
    });

    //show pokemon [mobile]
    if (width <= 600) {
      setShowPokemon(true);
    }
  }
  useEffect(() => {
    getInformation();
  });

  return (
    <div
      className="list-item"
      style={{ backgroundColor: color }}
      onClick={onClicked}
    >
      <div className="poke-icon">
        <PokemonIcon />
      </div>
      <div className="desaturate">
        <div
          className="list-texts"
          style={{
            color: ["white", "yellow", "pink"].find((key) => key === color)
              ? "darkslategray"
              : "white",
          }}
        >
          <div>{`#${id}`}</div>
          <div>{pokename}</div>
        </div>
      </div>
      <img
        src={image}
        alt={`artwork-${pokename}`}
        className="media"
        loading="lazy"
        placeholder={name}
      />
      {name === pokemon?.name ? (
        <div
          className="list-item-active"
          style={{
            background: pokemon.color === "white" ? "darkslategray" : "white",
          }}
        ></div>
      ) : null}
    </div>
  );
}
