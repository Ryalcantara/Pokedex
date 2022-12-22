import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Pokemon } from "./Parent";

function Paginate(props) {
  const pokemon = useContext(Pokemon)




  return (
    <div className="d-flex justify-content-around align-items-center">
      <div>
        <Button variant="outline-dark" onClick={props.decrease}>
          <AiFillCaretLeft></AiFillCaretLeft>
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
          <AiFillCaretRight></AiFillCaretRight>
        </Button>
      </div>
    </div>
  );
}

export default Paginate;
