import Button from "react-bootstrap/Button";
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
  let [increase, setIncrease] = useState(5);
  let [decrease, setDecrease] = useState(0);
  let [loading, setLoading] = useState(true);
  let [background, setBackground] = useState(null);

  const idClick = (poke) => {
    setId((id = poke));
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

  // useEffect(() => {

  //   fetch(
  //     `https://pokeapi.co/api/v2/pokemon?limit=${increase}&offset=${decrease}`
  //   )
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //     });
  // }, [increase, decrease]);

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
          
         <Body currentPage={currentPage} background={background}/>

        </div>
        <div>

            <Paginate
            
              // increase={increase}
              // decrease={decrease}
              // pokeName={currentPage.name}
              onIDClick={(something) => idClick(something)}
            />

        </div>
      </div>
    </div>

  );
}

export default Parent;
