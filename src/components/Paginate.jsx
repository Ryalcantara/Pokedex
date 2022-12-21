import { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Pokemon } from "./Parent";

function Paginate(props) {
  const pokemon = useContext(Pokemon)



  // let pokeId = props.paginate.map((pokemon, index) => pokemon.name);

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div>
        <Button variant="outline-dark" onClick={props.decrease}>
          <AiFillCaretLeft></AiFillCaretLeft>
        </Button>
      </div>
      <div className="d-flex align-items-center" style={{overflow: 'auto', maxWidth: '40rem'}}>
        {pokemon
          .map((id, index) => {
            return (
              <Button
                variant="outline-dark"
                size="sm"
                style={{ borderRadius: "20px", padding: '1rem', }}
                key={id}
                onClick={() => props.onIDClick(id)}
                active={id === props.pokeName}
              >
                {id}
              </Button>
            );
          })}
      </div>

      <div>
        <Button variant="outline-dark" onClick={props.increase}>
          <AiFillCaretRight></AiFillCaretRight>
        </Button>
      </div>
    </div>
  );
}

export default Paginate;
