import { useContext, useState, useEffect } from "react";
import { Pokemon } from "./Parent";
import { GrStatusInfo, GrNext, GrPrevious } from "react-icons/gr";
import { BackgroundColor } from "./Parent";


function Paginate(props) {
  const pokemon = useContext(Pokemon)
  const background = useContext(BackgroundColor)


  // let pokeId = props.paginate.map((pokemon, index) => pokemon.name);

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div>
        <button onClick={props.decrease}  style={{backgroundColor: `${background}`, border: 'none', padding: '5px 10px', borderRadius: '10px'}}>
          <GrPrevious/>
        </button>
      </div>
      <div className="d-flex align-items-center" style={{overflow: 'auto', maxWidth: '40rem'}}>
        {pokemon.filter((poke, id) =>{
          return(props.pokeName === poke)
        })
          .map((id, index) => {
            return (
              <p
                style={{ margin: '12px', borderRadius: "20px", padding: '10px', backgroundColor: `${background}`}}
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
        <button onClick={props.increase} style={{backgroundColor: `${background}`, border: 'none', padding: '5px 10px', borderRadius: '10px'}}>
          <GrNext></GrNext>
        </button>
      </div>
    </div>
  );
}

export default Paginate;
