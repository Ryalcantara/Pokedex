import Header from "./ViewHeader";
import Banner from "./ViewBanner";
import Navigator from "./ViewNavigator";
import Details from "./ViewDetails";
import { Dimension } from "../Provider";
import { useEffect, useState, useContext } from "react";
import "../styles/preview.css";

export default ({ url, setShowPokemon, showPokemon }) => {
  const { width } = useContext(Dimension);
  const [data, setData] = useState({});
  const [species, setSpecies] = useState({});
  const [activeDetails, setActiveDetails] = useState(0);
  useEffect(() => {
    fetchAllData(url).then((res) => {
      setData(res.pokemon);
      setSpecies(res.species);
    });
    setActiveDetails(0);

    function handlePopState() {
      setShowPokemon(false);
    }

    function onKeyEscClose(event) {
      if (event.keyCode === 8 || event.keyCode === 27) {
        setShowPokemon(false);
      }
    }
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", onKeyEscClose);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", onKeyEscClose);
    };
  }, [url]);
  return (
    <div
      className="view-wrapper"
      style={{
        right: width <= 600 && showPokemon ? 0 : "-100%",
      }}
    >
      <Header data={data} setShowPokemon={setShowPokemon} species={species} />
      <Banner data={data} species={species} />
      <Navigator
        data={data}
        active={activeDetails}
        setActive={setActiveDetails}
        species={species}
      />
      <Details data={data} species={species} active={activeDetails} />
    </div>
  );
};

async function fetchAllData(url) {
  const pokemonInfo = await (await fetch(url)).json();
  const species = await (await fetch(pokemonInfo?.species?.url)).json(); //has the details

  return { pokemon: pokemonInfo, species };
}
