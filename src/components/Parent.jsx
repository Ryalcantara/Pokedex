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
        // console.log(data)
        setCurrentPage(data);
        setLoading(false);
        setId(data.id);

      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBackground(data.color.name);
        document.body.style.backgroundColor = `${data.color.name}`
        document.getElementById('root').style.backgroundColor = "rgba(255, 255, 255, 0.5)"
        setFlavor(data.flavor_text_entries[1].flavor_text)
      })
      
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
 
   
    </Pokemon.Provider>

  );
}

export default Parent;
