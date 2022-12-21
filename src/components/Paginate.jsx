import { React } from "react";
import Button from "react-bootstrap/Button";

function Paginate( props ) {
  let pokeId = props.paginate.map((pokemon, index) => pokemon.name);

  

  return (
    <div className="d-flex justify-content-center align-items-center"
    style={{overflow: 'hidden'}}
    >
      <div >
        
        {pokeId
          .filter((pokeId, index) => index <= props.increase && index >= props.decrease)
          .map((id, index) => {
            
            return (
              <Button
                variant="outline-dark"
                size="sm"
                style={{ margin: "0 2rem 0 0", borderRadius: '20px'}}
                key={id}
                onClick={()=>props.onIDClick(id)}
                active={id === props.pokeName}
               >
                {id}
              </Button>
            );
          })}

      </div>
    </div>
  );
}

export default Paginate;
