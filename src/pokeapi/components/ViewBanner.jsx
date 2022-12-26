import { useEffect, useState, useContext } from "react";
import PokeBall from "../components/Pokeball";
import { Pokemon } from "../Provider";
import "../styles/preview.banner.css";
///
export default ({ data, species }) => {
  const { pokemon } = useContext(Pokemon);

  return (
    <>
      <div
        className="banner-wrapper"
        style={{ backgroundColor: species?.color?.name }}
      >
        <div className="poke-balls">
          <PokeBall
            id="poke-ball-1"
            className="poke-ball-view"
            fill={
              ["white", "yellow", "pink"].find(
                (key) => key === species?.color?.name
              )
                ? "#00000050"
                : "#ffffff50"
            }
          />
          <PokeBall
            id="poke-ball-2"
            className="poke-ball-view"
            fill={
              ["white", "yellow", "pink"].find(
                (key) => key === species?.color?.name
              )
                ? "#00000050"
                : "#ffffff50"
            }
          />
        </div>
        <div className="subdetails">
          <div className="details">
            <p
              className="japanese-label"
              style={{
                color: ["white", "yellow", "pink"].find(
                  (key) => key === species?.color?.name
                )
                  ? "darkslategray"
                  : "white",
              }}
            >
              {
                species?.names?.find((item) => item.language.name === "ja")
                  ?.name
              }
            </p>
            <p
              className="pokemon-id"
              style={{
                color: ["white", "yellow", "pink"].find(
                  (key) => key === species?.color?.name
                )
                  ? "darkslategray"
                  : "white",
              }}
            >
              {`#${data?.id}`}
            </p>
          </div>
          <img
            src={data?.sprites?.other["official-artwork"]?.front_default}
            alt={data?.name}
          />
        </div>
      </div>
    </>
  );
};
