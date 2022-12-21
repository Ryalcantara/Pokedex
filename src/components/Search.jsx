import React, { useContext, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import { Pokemon } from "./Parent";

function Search(props) {
  const [search, setSearch] = useState("");

  const pokeName = useContext(Pokemon);

  return (
    <div style={{ margin: "0 2rem" }}>
      <div style={{position: 'relative'}}>
        <div>
          <input
            type="search"
            className="form-control"
            placeholder="Search pokemon"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {    
        <div
          style={{
            backgroundColor: search && "rgba(255, 255, 255, 0.5)",
            borderRadius: "10px",
            maxHeight: "20rem",
            maxWidth: "16rem",
            position: "absolute",
            overflow: "auto",
          }}
        >
          <ul>
            {search && pokeName
              .filter((name, index) => {
                return name.startsWith(search, 0);
              })
              .map((pokemon, index) => {
                return (
                  <button
                    className="button d-flex justify-content-start"
                    style={{
                      border: "solid rgba(0, 0, 0, 0.5)",
                      borderRadius: "10px",
                      marginLeft: "-2rem",
                      padding: "1rem",
                      width: "113%",
                    }}
                    onClick={() => props.search(pokemon)}
                    key={index}
                  >
                    {pokemon}
                  </button>
                );
              })}
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default Search;
