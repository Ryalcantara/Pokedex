import { useContext, useEffect } from "react";
import { Pokemon } from "../Provider";
import "../styles/preview.navigator.css";
///
export default ({ data, active, setActive, species }) => {
  const { pokemon } = useContext(Pokemon);
  const nav = ["About", "Base Stats", "Evolution", "Moves"];
  useEffect(() => {}, [data, active]);
  return (
    <div className="navigator-wrapper">
      {nav.map((item, idx) => {
        const isActive = idx === active;
        return (
          <div
            className="nav-item"
            key={item}
            style={{
              backgroundColor: isActive
                ? species?.color?.name === "white"
                  ? "darkgray"
                  : species?.color?.name
                : "transparent",
              color: isActive
                ? ["white", "yellow", "pink"].find(
                    (key) => key === species?.color?.name
                  )
                  ? "darkslategray"
                  : "white"
                : "dimgray",
            }}
            onClick={() => setActive(idx)}
          >
            <div
              key={item}
              style={{ backgroundColor: "rgba(202, 202, 202, 0.5)" }}
              id="nav-link"
            >
              <div>{item}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
