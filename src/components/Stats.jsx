import React, { useEffect, useState } from "react";
import { Badge, Container, Row } from "react-bootstrap";

//types
import grass from "../img/icons/grass.svg";
import bug from "../img/icons/bug.svg";
import dark from "../img/icons/dark.svg";
import dragon from "../img/icons/dragon.svg";
import electric from "../img/icons/electric.svg";
import fairy from "../img/icons/fairy.svg";
import fighting from "../img/icons/fighting.svg";
import fire from "../img/icons/fire.svg";
import flying from "../img/icons/flying.svg";
import ghost from "../img/icons/ghost.svg";
import ground from "../img/icons/ground.svg";
import ice from "../img/icons/ice.svg";
import normal from "../img/icons/normal.svg";
import poison from "../img/icons/poison.svg";
import psychic from "../img/icons/psychic.svg";
import rock from "../img/icons/rock.svg";
import steel from "../img/icons/steel.svg";
import water from "../img/icons/water.svg";

function Stats(props) {
  const container = {
    borderLeft: "solid #fcfcf7",
    padding: '1rem',
    margin: '-1rem'
  };

  return (
      <div
        style={container}
        
      >
        <div>
          <div className="row">
            <h1>Base stats:</h1>
            {props.type && (
              <img
                src={
                  props.type === "grass"
                    ? grass
                    : props.type === "fire"
                    ? fire
                    : props.type === "bug"
                    ? bug
                    : props.type === "dark"
                    ? dark
                    : props.type === "dragon"
                    ? dragon
                    : props.type === "electric"
                    ? electric
                    : props.type === "electric"
                    ? electric
                    : props.type === "fairy"
                    ? fairy
                    : props.type === "fighting"
                    ? fighting
                    : props.type === "flying"
                    ? flying
                    : props.type === "ghost"
                    ? ghost
                    : props.type === "ground"
                    ? ground
                    : props.type === "ice"
                    ? ice
                    : props.type === "poison"
                    ? poison
                    : props.type === "psychic"
                    ? psychic
                    : props.type === "rock"
                    ? rock
                    : props.type === "steel"
                    ? steel
                    : props.type === "water"
                    ? water
                    : normal
                }
                alt="type"
                style={{
                  height: "100px",
                  width: "100px",
                  fill: "green",
                  stroke: "green",
                }}
              />
            )}
            {props.type2 && (
              <img
                src={
                  props.type2 && props.type2 === "grass"
                    ? grass
                    : props.type2 === "fire"
                    ? fire
                    : props.type2 === "bug"
                    ? bug
                    : props.type2 === "dark"
                    ? dark
                    : props.type2 === "dragon"
                    ? dragon
                    : props.type2 === "electric"
                    ? electric
                    : props.type2 === "electric"
                    ? electric
                    : props.type2 === "fairy"
                    ? fairy
                    : props.type2 === "fighting"
                    ? fighting
                    : props.type2 === "flying"
                    ? flying
                    : props.type2 === "ghost"
                    ? ghost
                    : props.type2 === "ground"
                    ? ground
                    : props.type2 === "ice"
                    ? ice
                    : props.type2 === "poison"
                    ? poison
                    : props.type2 === "normal"
                    ? normal
                    : props.type2 === "psychic"
                    ? psychic
                    : props.type2 === "rock"
                    ? rock
                    : props.type2 === "steel"
                    ? steel
                    : props.type2 === "water"
                    ? water
                    : null
                }
                alt="type"
                style={{
                  height: "100px",
                  width: "100px",
                  fill: "green",
                  stroke: "green",
                }}
              />
            )}
          </div>
          <div className="row">
            <div className="badgeContainer">
              <Badge pill bg="light" text="dark">
                HP: {props.stats[0].base_stat}
              </Badge>{" "}
              <Badge pill bg="light" text="dark">
                Attack: {props.stats[1].base_stat}
              </Badge>{" "}
              <br></br>
              <Badge pill bg="light" text="dark">
                Defense: {props.stats[2].base_stat}
              </Badge>{" "}
              <Badge pill bg="light" text="dark">
                SP Attack: {props.stats[3].base_stat}
              </Badge>{" "}
              <br></br>
              <Badge pill bg="light" text="dark">
                SP Defense: {props.stats[4].base_stat}
              </Badge>{" "}
              <Badge pill bg="light" text="dark">
                Speed: {props.stats[5].base_stat}
              </Badge>{" "}
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Stats;
