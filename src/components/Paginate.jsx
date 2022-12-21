import { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Pokemon } from "./Parent";

function Paginate(props) {
  const pokemon = useContext(Pokemon)
  let [increase, setIncrease] = useState(50);
  let [decrease, setDecrease] = useState(0);

  const keyPlus = (event) => {
    if (event.code === "ArrowRight") {
      setIncrease(increase + 5);
      setDecrease(decrease + 5);
    } else if (event.code === "ArrowLeft") {
      console.log(event);
      setIncrease(increase === 5 ? (increase = 5) : increase - 5);
      setDecrease(decrease === 0 ? (decrease = 0) : decrease - 5);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPlus);

  }, [increase, decrease]);

  const pagePlus = (prev) => {
    setIncrease(increase++);
    setDecrease(decrease++);
  };

  const pageMinus = () => {
    setIncrease(increase === 5 ? (increase = 5) : increase - 5);
    setDecrease(decrease === 5 ? (decrease = 5) : decrease - 5);
  };

  // let pokeId = props.paginate.map((pokemon, index) => pokemon.name);

  return (
    <div className="d-flex justify-content-around align-items-center">
      <div>
        <Button variant="outline-dark" onClick={pageMinus}>
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
        <Button variant="outline-dark" onClick={pagePlus}>
          <AiFillCaretRight></AiFillCaretRight>
        </Button>
      </div>
    </div>
  );
}

export default Paginate;
