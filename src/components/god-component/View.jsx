import { useEffect, useState, useContext } from "react";
import { Scheme } from "./SchemeProvider";
import Sprite from "./RenderSprite";
import Stats from "./RenderStats";
import style from "./styles/view.module.css";
//
export default function View({ url }) {
  const [data, setData] = useState(null);
  const scheme = useContext(Scheme);
  // fetch data
  async function fetchPokemonData() {
    const data = await fetchHandler(url); //fetch pokemon data
    const color = await fetchHandler(data.species.url); //fetch pokemon color based from species category
    //define shape (simplified) data
    const pokemonData = {
      id: data.id,
      name: data.name,
      experience: data.base_experience,
      physical: {
        height: data.height,
        weight: data.weight,
      },
      image: data.sprites.other.dream_world.front_default,
      species: data.species.name,
      stats: data.stats.map((item) => ({
        name: item.stat.name,
        stat: item.base_stat,
      })),
      types: data.types.map((item) => ({
        name: item.type.name,
        url: item.type.url,
      })),
      abilities: data.abilities.map((item) => ({
        ability: item.ability.name,
        hidden: item.is_hidden,
      })),
      color: color?.color?.name || "#ffffff",
    };
    return pokemonData;
  }

  useEffect(() => {
    //fetch data at runtime
    fetchPokemonData().then((res) => {
      //if successfull render color and data
      scheme.setScheme({ color: res.color });
      setData(res);
    });
  }, [url]);

  //if data exists then render
  if (data) {
    return (
      <section className={style.section}>
        <div
          className={style["card-wrapper"]}
          style={{ backgroundColor: scheme.scheme.color }}
        >
          <div className={style.desaturate} />
          <p className={style["backdrop-text"]}>{data.name}</p>
          <div className={style.content}>
            <Sprite data={data} />
            <Stats data={data} />
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={style.section}
        style={{ display: "grid", placeItems: "center" }}
      >
        <p>Loading...</p>
      </section>
    );
  }
}

//(simplified data fetching)
async function fetchHandler(url) {
  const request = await fetch(url);
  return await request.json();
}
