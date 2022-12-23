import { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Pokemon } from "./Parent";
import {BiLeftArrow, BiRightArrow} from 'react-icons/bi'

function Paginate(props) {
  const pokemon = useContext(Pokemon)



  // let pokeId = props.paginate.map((pokemon, index) => pokemon.name);

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div>
        <Button variant="outline-dark" onClick={props.decrease}>
          <BiLeftArrow></BiLeftArrow>
        </Button>
      </div>
      <div className="d-flex align-items-center" style={{overflow: 'auto', maxWidth: '40rem'}}>
        {pokemon.filter((poke, id) =>{
          return(props.pokeName === poke)
        })
          .map((id, index) => {
            return (
              <p
          
                style={{ borderRadius: "20px", padding: '1rem', }}
                key={id}
                onClick={() => props.onIDClick(index+1)}
                active={id === props.pokeName}
              >
                {id}
              </p>
            );
          })}
      </div>

      <div>
        <Button variant="outline-dark" onClick={props.increase}>
          <BiRightArrow></BiRightArrow>
        </Button>
      </div>
    </div>
  );
}

export default Paginate;
