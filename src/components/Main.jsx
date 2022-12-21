import { useState } from "react";
import "../fonts/electroharmonix.ttf";
import { MdAdsClick } from "react-icons/md";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import { BiShapeCircle } from "react-icons/bi";

function Main(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div style={{ position: "relative" }}>
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
      <div style={{ position: "relative", margin: "-3rem -5rem 0 0" }}>
        <Button variant="outline-dark" text="dark" onClick={handleShow}>
          <MdAdsClick></MdAdsClick>
        </Button>
      </div>
      <Modal
      style={{backdropFilter: 'blur(5px)'}}
       {...props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
      show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: `#bd5457`}}>
          <div style={{borderRadius: '50px'}}>
          POKEDEX 
                  </div>
          <Modal.Title>{props.pokeName}</Modal.Title>
        </Modal.Header >
        <Modal.Body style={{backgroundColor: `#bd5457`}}>

          {props.flavor}
          </Modal.Body>
     
      </Modal>
    </div>
  );
}

export default Main;
