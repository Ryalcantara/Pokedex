import { Pokemon } from "../Provider";
import { useContext } from "react";
import TypeRender from "./Types";
import "../styles/preview.header.css";
///
export default ({ data, setShowPokemon, species }) => {
  const { pokemon } = useContext(Pokemon);
  return (
    <div
      style={{ backgroundColor: species?.color?.name }}
      className="view-header"
    >
      <div
        style={{
          background: "rgba(202, 202, 202, 0.5)",
        }}
        className="view-header-sub"
      >
        <div
          className="view-pokemon-header-line"
          style={{ display: "flex", alignItems: "center", gap: "15px" }}
        >
          <div
            className="view-back-button"
            style={{
              color: ["white", "yellow", "pink"].find(
                (key) => key === species?.color?.name
              )
                ? "darkslategray"
                : "white",
            }}
            onClick={() => setShowPokemon(false)}
          >
            <span>&lt;-</span>
          </div>
          <div
            className="view-pokemon-name"
            style={{
              color: ["white", "yellow", "pink"].find(
                (key) => key === species?.color?.name
              )
                ? "darkslategray"
                : "white",
            }}
          >
            {pokemon.name}
          </div>
        </div>
        <TypeRender types={data.types} />
      </div>
    </div>
  );
};
