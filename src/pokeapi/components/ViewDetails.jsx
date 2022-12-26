import { useEffect } from "react";
import Info from "./details/Info";
import Stats from "./details/Stats";
import Evolution from "./details/Evolution";
import Moves from "./details/Moves";
import "../styles/preview.details.css";

export default ({ data, species, active }) => {
  const items = [
    <Info data={data} species={species} />,
    <Stats data={data} species={species} />,
    <Evolution data={data} species={species} />,
    <Moves moves={data?.moves} />,
  ];
  useEffect(() => {
    ///
  }, [data, species, active]);
  return (
    <>
      <div className="details-pane-wrapper">
        <div className="details-overflow-panel">{items.at(active)}</div>
      </div>
    </>
  );
};
