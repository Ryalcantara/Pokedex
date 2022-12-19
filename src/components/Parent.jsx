import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Main from "./Main";
import Stats from "./Stats";
import Paginate from "./Paginate";

function Parent() {
  let [currentPage, setCurrentPage] = useState(null);
  let [id, setId] = useState(1);
  let [paginate, setPaginate] = useState(null);
  let [background, setBackground] = useState(null);
  let [increase, setIncrease] = useState(5);
  let [decrease, setDecrease] = useState(0);

  const idClick = (poke) => {
    setId((id = poke));
  };

  const pagePlus = (prev) => {
    setIncrease(increase + 5);
    setDecrease(decrease + 5);
  };

  const pageMinus = () => {
    setIncrease(increase === 5 ? (increase = 5) : increase - 5);
    setDecrease(decrease === 0 ? (decrease = 0) : decrease - 5);
  };
  // console.log(type2)

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        
        setCurrentPage(data);

      });

      


  }, [id]);

  const fetchPokemon = async () =>{
    const color = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${increase}&offset=${decrease}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPaginate(data.results);
      });
  }, [increase, decrease]);
 
  return (
    <div style={{backgroundColor: 'green', height: '100vh'}}>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <Button variant="outline-dark" onClick={pageMinus}>
            <AiFillCaretLeft></AiFillCaretLeft>
          </Button>
        </div>
        <div style={{margin: '3rem '}}>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              <div>
                {currentPage && (
                  <Main
                    pokeName={currentPage.name}
                    pokeId={currentPage.id}
                    sprites={
                      currentPage.sprites.other.dream_world.front_default
                    }
                  />
                )}
              </div>
              <div>
                {currentPage && (
                  <Stats
                    stats={currentPage.stats}
                    type={currentPage?.types[0].type.name}
                    type2={
                      currentPage?.types[1] && currentPage?.types[1].type.name
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Button variant="outline-dark" onClick={pagePlus}>
            <AiFillCaretRight></AiFillCaretRight>
          </Button>
        </div>
      </div>
      <Row>
        {paginate && (
          <Paginate
            paginate={paginate}
            increase={increase}
            decrease={decrease}
            pokeName={currentPage.name}
            onIncrease={() => pagePlus(increase)}
            onDecrease={() => pageMinus(decrease)}
            onIDClick={(something) => idClick(something)}
          />
        )}
      </Row>
    </div>
  );
}

export default Parent;
