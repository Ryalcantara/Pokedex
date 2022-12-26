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
      <img
        src={from?.image}
        style={{
          maxHeight: "150px",
          backgroundColor: "whitesmoke",
          borderRadius: "25px",
          objectFit: "contain",
        }}
        title={from?.name}
      />
      <span style={{ fontSize: "1.5em", fontWeight: "bolder" }}>-&gt;</span>
      <img
        src={to?.image}
        style={{
          maxHeight: "150px",
          background: `whitesmoke`,
          borderRadius: "25px",
          objectFit: "contain",
        }}
        title={to?.name}
      />
    </div>
  );
};
