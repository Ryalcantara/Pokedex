import { useCallback } from "react";

import bug from "../../img/icons/bug.svg";
import dark from "../../img/icons/dark.svg";
import dragon from "../../img/icons/dragon.svg";
import electric from "../../img/icons/electric.svg";
import fairy from "../../img/icons/fairy.svg";
import fighting from "../../img/icons/fighting.svg";
import fire from "../../img/icons/fire.svg";
import flying from "../../img/icons/flying.svg";
import ghost from "../../img/icons/ghost.svg";
import grass from "../../img/icons/grass.svg";
import ground from "../../img/icons/ground.svg";
import ice from "../../img/icons/ice.svg";
import normal from "../../img/icons/normal.svg";
import poison from "../../img/icons/poison.svg";
import psychic from "../../img/icons/psychic.svg";
import rock from "../../img/icons/rock.svg";
import steel from "../../img/icons/steel.svg";
import water from "../../img/icons/water.svg";

const typeSprites = [
  { name: "bug", svg: bug },
  { name: "dark", svg: dark },
  { name: "dragon", svg: dragon },
  { name: "electric", svg: electric },
  { name: "fairy", svg: fairy },
  { name: "fighting", svg: fighting },
  { name: "fire", svg: fire },
  { name: "flying", svg: flying },
  { name: "ghost", svg: ghost },
  { name: "grass", svg: grass },
  { name: "ground", svg: ground },
  { name: "ice", svg: ice },
  { name: "normal", svg: normal },
  { name: "poison", svg: poison },
  { name: "psychic", svg: psychic },
  { name: "rock", svg: rock },
  { name: "steel", svg: steel },
  { name: "water", svg: water },
];

const style = {
  image: {
    borderRadius: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: "45px",
    width: "45px",
    objectFit: "contain",
    padding: "8px",
  },
  wrapper: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
};

export default function _({ types }) {
  //(performance optimized) wrapped type picker
  const findType = useCallback(
    function findType(name) {
      return typeSprites.find((item) => item.name === name);
    },
    [types]
  );
  ///
  return (
    <div style={style.wrapper}>
      {types?.map((item) => {
        const type = findType(item.name);
        return (
          <img
            style={style.image}
            src={type?.svg}
            alt={item.name}
            key={item.name}
            title={item.name}
          />
        );
      })}
    </div>
  );
}
