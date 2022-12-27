import { Pokemon } from "../../Provider";
import { useContext } from "react";
export default ({ from, to }) => {
  const { pokemon } = useContext(Pokemon);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        justifyItems: "center",
        gap: "15px",
      }}
    >
      <BuildImage src={from?.image} name={from?.name} />
      <span style={{ fontSize: "1.5em", fontWeight: "bolder" }}>-&gt;</span>
      <BuildImage src={to?.image} name={to?.name} />
    </div>
  );
};

function BuildImage({ src, name }) {
  return (
    <div>
      <div className="evolution-item">
        <img
          src={src}
          alt={name}
          loading={"lazy"}
          className="evolution-item-image"
          placeholder="Loading Pokemon"
        />
        <div className="evolution-item-name" style={{ textAlign: "center" }}>
          {name}
        </div>
      </div>
    </div>
  );
}
