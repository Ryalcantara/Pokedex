import React, { useEffect, useState } from "react";

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
    padding: "1rem",
    margin: "1rem",
    // borderRadius: '20px',
    // backgroundColor: 'rgba(0,0,0, 0.5)',
  };

  const badge = {
    container: {
      display: "flex",
      color: "white",
      borderRadius: "8px",
    },
    value: {
      padding: "8px",
      borderRadius: "0px 8px 8px 0px",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    label: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      borderRadius: "8px 0 0 8px",

      padding: "8px",
    },
  };

  return (
    <div style={container}>
      <div>
        <div className="row">
          <h4>
            <b>Base stats:</b>
          </h4>
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
                height: "60px",
                width: "60px",
                borderRadius: "20px",
                backgroundColor: "rgba(0,0,0, 0.5)",
                margin: "0 1rem",
              }}
              title={props.type}
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
                height: "60px",
                width: "60px",
                fill: "green",
                stroke: "green",
                borderRadius: "20px",
                backgroundColor: "rgba(0,0,0, 0.5)",
              }}
              title={props.type2}
            />
          )}
        </div>
        <br></br>
        <div style={{ borderBottom: "solid", paddingBottom: "10px" }}>
          <div className="row">
            <div className="col" style={badge.container}>
              <span style={badge.label}>HP:</span>
              <span style={badge.value}>{props.stats[0].base_stat}</span>
            </div>
            <div className="col" style={badge.container}>
              <span style={badge.label}>Attack:</span>
              <span style={badge.value}>{props.stats[1].base_stat}</span>
            </div>
            <div className="col" style={badge.container}>
              <span style={badge.label}>Defense:</span>
              <span style={badge.value}>{props.stats[2].base_stat}</span>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col" style={badge.container}>
              <span style={badge.label}>SP Attack:</span>
              <span style={badge.value}>{props.stats[3].base_stat}</span>
            </div>
            <div className="col" style={badge.container}>
              <span style={badge.label}>SP Defense:</span>
              <span style={badge.value}>{props.stats[4].base_stat}</span>
            </div>
          </div>
          <br></br>
          <div className="col" style={badge.container}>
            <span style={badge.label}>Speed:</span>
            <span style={badge.value}>{props.stats[5].base_stat}</span>
          </div>
        </div>
        <div>
          <h5><b>Abilities:</b></h5>
        <div className="row">
            <div className="col" style={badge.container}>
            {props.pokemon.abilities[0].ability.name && <span style={badge.label}>{props.pokemon.abilities[0].ability.name}</span>}
            </div>
            <div className="col" style={badge.container}>
              {props.pokemon.abilities[1]?.ability.name && <span style={badge.label}>{props.pokemon.abilities[1].ability.name}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
