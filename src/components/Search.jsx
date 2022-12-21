import React, { useEffect, useState } from 'react'
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";

function Search() {

const [search, setSearch] = useState('');

useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
  .then(res =>{
    return res.json()
  }).then(data =>{
    console.log(data.results)
  })

}, [])

const handleSubmit = event => {
  // 👇️ prevent page refresh
  event.preventDefault();

  console.log('form submitted ✅');
};


  return (
    <div className="d-flex">
    <form className="d-flex" onSubmit={handleSubmit} style={{ margin: "10PX" }}>
      <input
        type="search"
        className="form-control"
        placeholder="Search pokemon"
        onChange={e => setSearch(e.target.value)}
      />
      <Button type='submit' variant="outline-dark" className="btn">
        <BiSearchAlt></BiSearchAlt>
      </Button>
    </form>
  </div>
  )
}

export default Search