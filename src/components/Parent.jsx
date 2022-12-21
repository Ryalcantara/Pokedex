import Button from "react-bootstrap/Button";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { React, useState, useEffect } from "react";
import Main from "./Main";
import Stats from "./Stats";
import Paginate from "./Paginate";
import TopNav from "./TopNav";
import pokeball from "../img/pokeball.png";
import { BiSearchAlt } from "react-icons/bi";
import Body from "./Body";

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
    setIncrease(increase === 5 ? (increase = 5) : increase - 5);
    setDecrease(decrease === 0 ? (decrease = 0) : decrease - 5);
  };

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
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentPage(data);
        console.log(data);
        setLoading(false);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBackground(data.color.name);
      });
  }, [id]);

  useEffect(() => {
    document.addEventListener("keydown", keyPlus);

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
    <div
      id="background"
      style={{
        backgroundColor: `${background}`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          height: "100vh",
          width: "100vw",
        }}
      >
        <TopNav/>
        {loading && <div>Loading....</div>}

        <div className="d-flex justify-content-around align-items-center">
          <div>
            <Button variant="outline-dark" onClick={pageMinus}>
              <AiFillCaretLeft></AiFillCaretLeft>
            </Button>
          </div>
         <Body currentPage={currentPage} background={background}/>

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
