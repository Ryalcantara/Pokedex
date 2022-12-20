import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import Main from "./Main";
import Stats from "./Stats";
import Paginate from "./Paginate";
import ColorSchemeProvider from "./ColorSchemeProvider";
import Carousel from 'react-bootstrap/Carousel';


function Parent() {
  let [currentPage, setCurrentPage] = useState(null);
  let [id, setId] = useState(1);
  let [paginate, setPaginate] = useState(null);
  let [increase, setIncrease] = useState(5);
  let [decrease, setDecrease] = useState(0);
  let [loading, setLoading] = useState(true);
  let [background, setBackground] = useState(null);

  const idClick = (poke) => {
    setId((id = poke));
  };

  const pagePlus = (prev) => {
    setIncrease(increase + 5);
    setDecrease(decrease + 5);
  };


  const pageMinus = () => {
    setDecrease(decrease === 0 ? (decrease = 0) : decrease - 5);
  };

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentPage(data);
        setLoading(false);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBackground(data.color.name);
        // setLoading(false)
        console.log(data.color.name);
      });
  }, [id]);

  const fetchPokemon = async () => {
    const color = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  };

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
    <div id='background'
    style={{backgroundColor: `${background}`, WebkitBackdropFilter: 'brightness(50%)', height: '100vh'}}
    
    >
      {loading && <div>Loading....</div>}

      <div className="d-flex justify-content-around align-items-center"
    
      >
        <div>
          <Button variant="outline-dark" onClick={pageMinus}>
            <AiFillCaretLeft></AiFillCaretLeft>
          </Button>
        </div>
        <div style={{ margin: "3rem" }}>
          <div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: `${background}`,
                filter: "saturation(100%)",
                backdropFilter: "brightness(1%)",
                transition: "all 300ms ease",
                padding: "1rem 2rem",
                margin: '0 -5rem',
                borderRadius: "29px",
              }}
            >
              <div>
                {currentPage && (
                  <Main
                    pokeName={currentPage.name}
                    pokeId={currentPage.id}
                    sprites={
                      currentPage.sprites.other["official-artwork"]
                        .front_default
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
      <div>
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
      </div>
    </div>
  //   <Carousel>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="holder.js/800x400?text=First slide&bg=373940"
  //       alt="First slide"
  //     />
  //     <Carousel.Caption>
  //       <h3>First slide label</h3>
  //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="holder.js/800x400?text=Second slide&bg=282c34"
  //       alt="Second slide"
  //     />

  //     <Carousel.Caption>
  //       <h3>Second slide label</h3>
  //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //     <img
  //       className="d-block w-100"
  //       src="holder.js/800x400?text=Third slide&bg=20232a"
  //       alt="Third slide"
  //     />

  //     <Carousel.Caption>
  //       <h3>Third slide label</h3>
  //       <p>
  //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //       </p>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel>
  );
}

export default Parent;
