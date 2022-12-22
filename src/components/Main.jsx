import { useState } from "react";
import "../fonts/electroharmonix.ttf";
import { MdAdsClick } from "react-icons/md";
import { Button } from "react-bootstrap";
import Modal from "./Modal";
import { GrStatusUnknown } from "react-icons/gr";

function Main(props) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div style={{ padding: "1rem" }}>
      <div>
        <div className="row">
          <h4>#{props.pokeId}</h4>
        </div>
        <div className="row">
          <h1>{props.pokeName}</h1>
        </div>
      </div>
      <div style={{ marginBottom: ".1rem" }}>
        <h1 id="overlay" style={{ fontFamily: "electroharmonix" }}>
          {props.pokeName}
        </h1>
        <div className="row">
          <img
            style={{ width: "450px", height: "45 0px" }}
            src={props.sprites}
            alt={props.pokeName}
          />
        </div>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ marginBottom: "1rem" }}
      >
        <Button
          variant="outline-dark"
          text="dark"
          onClick={handleShow}
        >
          <MdAdsClick></MdAdsClick>
        </Button>
        <Button
        id='status'
          variant="outline-dark"
          text="dark"
          onClick={()=>{
          document.querySelector('#stats').style.display='inline'
          document.querySelector('#main').style.display='none'

        }}
        >
          <GrStatusUnknown />
        </Button>
      </div>
      <Modal
        pokeName={props.pokeName}
        flavor={props.flavor}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Main;
