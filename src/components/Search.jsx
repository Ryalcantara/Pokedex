import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";

function Search() {
  return (
    <div className="d-flex">
    <form action="" className="d-flex" style={{ margin: "10PX" }}>
      <input
        type="search"
        className="form-control"
        placeholder="Search pokemon"
      />
      <Button variant="outline-dark" className="btn">
        <BiSearchAlt></BiSearchAlt>
      </Button>
    </form>
  </div>
  )
}

export default Search