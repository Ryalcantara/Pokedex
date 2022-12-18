import { React, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Main from "./Main";
import Stats from "./Stats";
import Paginate from "./Paginate";



function Parent() {
  let [currentPage, setCurrentPage] = useState(null);
  let [id, setId] = useState(1);
  let [paginate, setPaginate] = useState(null);
  let [increase, setIncrease] = useState(5);
  let [decrease, setDecrease] = useState(0);
  let [type, setType] = useState(null);
  let [type2, setType2] = useState(null);

  

  const idClick = (poke) => {
    setId((id = poke));
  };

  const pagePlus = (prev) => {
    setIncrease(increase = prev+ 5
      );
      setDecrease(decrease + 5);
    };
    
    const pageMinus = () => {
    setIncrease(increase === 5 ? (increase = 5) : increase-5);
    setDecrease(decrease === 0 ? (decrease = 0) : decrease-5);
  };
  // console.log(type2)
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      return res.json();
    })  
    .then((data) => {
      // console.log(data)
      setCurrentPage(data);
      setType(currentPage?.types[0].type.name)
      if(data.types[1] === undefined) {
         setType2(type2 = currentPage?.types[1].type.name) 
        //  console.log(type2)
      }else{
        setType2(null)
        // console.log(type2)
      }
        
      });
  }, [id, type, type2]);
  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${increase}&offset=${decrease}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setPaginate(data.results);
      });
  }, [increase, decrease]);

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
          {currentPage && <Stats stats={currentPage.stats} type={type} type2={type2}/>}
        </Col>
      </Row>
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
    </Container>
  );
}

export default Parent;
