import { createContext, useState, useEffect } from "react";
import Paginate from "./Paginate";
import TopNav from "./TopNav";
import Body from "./Body";

export const Pokemon = createContext()

function Parent() {
  let [currentPage, setCurrentPage] = useState(null);
  let [id, setId] = useState(1);
  let [loading, setLoading] = useState(true);
  let [background, setBackground] = useState(null);
  const [pokemon, setPokemon] = useState([])
  const [flavor, setFlavor] = useState('')

  const idClick = (poke) => {
    setId((id = poke));
  };

  const keyPlus = (event) => {
    if (event.code === "ArrowRight") {
      setIncrease(increase + 5);
      setDecrease(decrease + 5);
    } else if (event.code === "ArrowLeft") {
      console.log(event);
      setIncrease(increase === 5 ? (increase = 5) : increase - 5);
      setDecrease(decrease === 0 ? (decrease = 0) : decrease - 5);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPlus);

  }, [keyPlus]);

  const pagePlus = (prev) => {
    setId(id++);
    console.log(id)
  };

  const pageMinus = () => {
    setId(id--)
    console.log(id)
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
        setFlavor(data.flavor_text_entries[1].flavor_text)
      });
      
  }, [id]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPokemon(
          data.results.map((id) => {
            return id.name;
          })
        );
      });
  }, []);


  return (
    <Pokemon.Provider value={pokemon}>

    <div
      id="background"
      style={{
        backgroundColor: `${background}`,
        height: "100%",
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
        <TopNav search={(something) => idClick(something)}/>
        {loading && <div>Loading....</div>}

        <div className="d-flex justify-content-around align-items-center">
          
         <Body currentPage={currentPage} background={background} flavor={flavor}/>

        </div>
        <div>

            <Paginate
              increase={pagePlus}
              decrease={pageMinus}
              pokeName = {currentPage?.name}
              onIDClick={(something) => idClick(something)}
            />

        </div>
      </div>
    </div>
    </Pokemon.Provider>

  );
}

export default Parent;
