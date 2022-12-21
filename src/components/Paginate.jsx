import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Paginate(props) {
  let [increase, setIncrease] = useState(5);
  let [decrease, setDecrease] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  const keyPlus = (event) => {
    if (event.code === "ArrowRight") {
      console.log(event);

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

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(
          data.results.map((id) => {
            return id.name;
          })
        );
        // setPaginate(data.results);
      });
  }, []);

  const pagePlus = (prev) => {
    setIncrease(increase++);
    setDecrease(decrease++);
  };

  const pageMinus = () => {
    setIncrease(increase === 5 ? (increase = 5) : increase - 5);
    setDecrease(decrease >= 5 ? (decrease = 5) : decrease - 5);
  };

  // let pokeId = props.paginate.map((pokemon, index) => pokemon.name);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <Button variant="outline-dark" onClick={pageMinus}>
          <AiFillCaretLeft></AiFillCaretLeft>
        </Button>
      </div>
      <div>
        {pokemon
          .filter((pokeId, index) => index <= increase && index >= decrease)
          .map((id, index) => {
            return (
              <Button
                variant="outline-dark"
                size="sm"
                style={{ borderRadius: "20px" }}
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
