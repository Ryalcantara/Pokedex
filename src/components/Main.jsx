import React, { useContext, useState } from "react";
import "../fonts/electroharmonix.ttf";
import { TbPokeball } from "react-icons/tb";
import Modal from "./Modal";
import { GrNext } from "react-icons/gr";
import { BackgroundColor } from "./Parent";

function Main(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const background = useContext(BackgroundColor);

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between flex-column">
        <div className="flex-column">
          <div>
            <h4>#{props.pokeId}</h4>
          </div>
          <div>
            <h1>{props.pokeName}</h1>
            <h1 id="overlay" style={{ fontFamily: "electroharmonix" }}>
              {props.pokeName}
            </h1>
          </div>
        </div>
        <div className="mb-auto p-5">
          <div>
            <img
              style={{ width: "300px", height: "300px" }}
              src={props.sprites}
              alt={props.pokeName}
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <button
          style={{
            backgroundColor: `${background}`,
            border: "none",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={handleShow}
        >
          <TbPokeball></TbPokeball>
        </button>
        <button
          id="status"
          style={{
            backgroundColor: `${background}`,
            border: "none",
            padding: "5px 10px",
            borderRadius: "10px",
          }}
          onClick={() => {
            document.querySelector("#stats").style.display = "inline";
            document.querySelector("#main").style.display = "none";
          }}
        >
          <GrNext></GrNext>
        </button>
      </div>

      <Modal
        pokeName={props.pokeName}
        flavor={props.flavor}
        show={show}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}

export default Main;
