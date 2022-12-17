import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Main from "./Main";
import Stats from "./Stats";
import Paginate from "./Paginate";
import grass from "../img/icons/grass.svg";
import bug from "../img/icons/bug.svg";
import dark from "../img/icons/dark.svg";
import dragon from "../img/icons/dragon.svg";
import electric from "../img/icons/electric.svg";
import fairy from "../img/icons/fairy.svg";
import fighting from "../img/icons/fighting.svg";
import fire from "../img/icons/fire.svg";
import flying from "../img/icons/flying.svg";
import ghost from "../img/icons/ghost.svg";
import ground from "../img/icons/ground.svg";
import ice from "../img/icons/ice.svg";
import normal from "../img/icons/normal.svg";
import poison from "../img/icons/poison.svg";
import psychic from "../img/icons/psychic.svg";
import rock from "../img/icons/rock.svg";
import steel from "../img/icons/steel.svg";
import water from "../img/icons/water.svg";


// console.log(Pokemon('gengar'));
// console.log(p('pikachu'));

function Parent() {
  let [currentPage, setCurrentPage] = useState(null);
  let [id, setId] = useState(1);
  let [paginate, setPaginate] = useState(null);
  let [increase, setIncrease] = useState(5);
  let [decrease, setDecrease] = useState(1);
  let [type, setType] = useState(null);

  // let p = new Pokedex();
  // const obj = p.pokemon();
  // console.log(obj[currentPage]);
  // let currentPage = obj[currentPage];

  

  const idClick = (poke) => {
    // console.log(poke);
    setId((id = poke));
  };

  const pagePlus = () => {
    setIncrease(increase + 5);
    setDecrease(decrease + 5);
  };
  
  const pageMinus = () => {
    setIncrease(increase >= 5 ? (increase = 1) : increase--);
    setDecrease(decrease >= 1 ? (decrease = 1) : decrease--);
  };
  console.log(currentPage?.types[0].type.name)
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data)
      setCurrentPage(data);
    });
  }, [id]);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      // console.log(data.results)
      setPaginate(data.results);
      });
  }, []);

  return (
    <Container style={{ paddingTop: '-100rem',
      backgroundColor: '#ACDF87',
      borderRadius: '15px'
        }} >
      <Row >
        <Col>
          {currentPage && (
            <Main
              pokeName={currentPage.name}
              pokeId={currentPage.id}
              sprites={currentPage.sprites.other.dream_world.front_default}
            />
          )}
        </Col>
        <Col
          className="d-flex justify-content-between"
          style={{ margin: "0 -6rem" }}
        >
          {currentPage && <Stats stats={currentPage.stats} type={currentPage?.types}/>}
        </Col>
      </Row>
          {paginate && (
            <Paginate
              paginate={paginate}
              increase={increase}
              decrease={decrease}
              pokeName={currentPage.name}
              onIncrease={() => pagePlus()}
              onDecrease={() => pageMinus()}
              onIDClick={(something) => idClick(something)}
            />
          )}
    </Container>
  );
}

export default Parent;
