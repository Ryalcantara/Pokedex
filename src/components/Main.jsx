import { React } from "react";

function Main(props) {
  return (
    <div style={{ padding: "1rem",}} >
      <div>
        <div className="row">
          <h4>#{props.pokeId}</h4>
        </div>
        <div className="row">
          <h1>{props.pokeName}</h1>
        </div>
      </div>
      <div>
        <h1 id="overlay">{props.pokeName}</h1>
        <div className="row">
          <img
            style={{ width: "450px", height: "45 0px" }}
            src={props.sprites}
            alt={props.pokeName}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
