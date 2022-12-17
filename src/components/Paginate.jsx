import { React } from "react";
import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Paginate( props ) {
  let pokeId = props.paginate.map((pokemon, index) => pokemon.name);
  // console.log(pokeId)

  

  return (
    <div className="d-flex justify-content-center align-items-center" style={{marginTop: '-10rem', paddingBottom: '20px'}}>
      <div>
        <Button variant="outline-dark"  style={{ marginRight: "1rem"  }} onClick={props.onDecrease}>
          <AiFillCaretLeft></AiFillCaretLeft>
        </Button>
        {pokeId
          .filter((pokeId, index) => index <= props.increase && index >= props.decrease)
          .map((id, index) => {
            return (
              <Button
                variant="outline-dark"
                size="md"
                style={{ margin: "0 2rem 0 0", }}
                key={id}
                onClick={()=>props.onIDClick(id)}
                active={id == props.pokeName}
               >
                {/* {console.log(index)} */}
                {id}
              </Button>
            );
          })}
        <Button variant="outline-dark" onClick={props.onIncrease}>
          <AiFillCaretRight></AiFillCaretRight>
        </Button>
      </div>
    </div>
  );
}

export default Paginate;
