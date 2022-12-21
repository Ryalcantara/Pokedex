import React from 'react'
import pokeball from "../img/pokeball.png";


function Title() {
  return (
    <div className="d-flex align-items-center">
    <img
      src={pokeball}
      alt=""
      height="50px"
      width="50px"
      style={{ margin: "5px 0 0 5px" }}
    />
    <h1 style={{ margin: "5px 0 0 5px" }}>POKEDEX</h1>
  </div>
  )
}

export default Title