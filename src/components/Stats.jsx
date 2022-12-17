import React, {useEffect, useState} from "react";
import { Badge, Container, Row } from "react-bootstrap";

//types
import grass from "../img/icons/grass.svg";
import bug from "../img/icons/bug.svg";
import dark from "../img/icons/dark.svg";
import dragon from "../img/icons/dragon.svg";
import electric from "../img/icons/electric.svg";
import fairy from "../img/icons/fairy.svg";
import fighting from "../img/icons/fighting.svg";
import fire from "../img/icons/fire.svg";
import flying from "../img/icons/flying.svg";
import ghost from "../img/icons/ghost.svg";
import ground from "../img/icons/ground.svg";
import ice from "../img/icons/ice.svg";
import normal from "../img/icons/normal.svg";
import poison from "../img/icons/poison.svg";
import psychic from "../img/icons/psychic.svg";
import rock from "../img/icons/rock.svg";
import steel from "../img/icons/steel.svg";
import water from "../img/icons/water.svg";



const typeSelection = [
  {type: 'grass', scheme: 'green', svg: grass},
  {type: 'bug', scheme: 'yellowgreen', svg: bug},
  {type: 'dragon', scheme: 'orangered', svg: dragon},
  {type: 'electric', scheme: 'yellow', svg: electric},
  {type: 'fairy', scheme: 'pink', svg: fairy},
  {type: 'fighting', scheme: 'orangered', svg: fighting},
  {type: 'fire', scheme: 'green', svg: fire},
  {type: 'flying', scheme: 'green', svg: flying},
  {type: 'ghost', scheme: 'green', svg: ghost},
  {type: 'ground', scheme: 'green', svg: ground},
  {type: 'ice', scheme: 'green', svg: ice},
  {type: 'normal', scheme: 'green', svg: normal},
  {type: 'poison', scheme: 'green', svg: poison},
  {type: 'psychic', scheme: 'green', svg: psychic},
  {type: 'rock', scheme: 'green', svg: rock},
  {type: 'steel', scheme: 'green', svg: steel},
  {type: 'water', scheme: 'green', svg: water},
]

function Stats(props) {
  // console.log(props.stats)
  const container = {
    display: "flex",
    height: "100vh",
    marginTop: "-2rem",
  };


  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={container}
      >
        <Container style={{ marginLeft: "9rem" }}>
          <Row>
            <h1>Base stats:</h1>
            {/* <grass fill='green' stroke='black'/> */}
              {/* <img

                alt="type"
                style={{
                  height: '100px',
                  width: '100px',
                  fill: 'green',
                  stroke: 'green'
                }}
              /> */}
              <GenerateTypeAndScheme type={props?.type}/>
          </Row>
          <Row>
            <div
              className="badgeContainer"
              style={{ borderLeft: " 2px solid" }}
            >
              <Badge pill bg="light" text="dark">
                HP: {props.stats[0].base_stat}
              </Badge>{" "}
              <Badge pill bg="light" text="dark">
                Attack: {props.stats[1].base_stat}
              </Badge>{" "}
              <br></br>
              <Badge pill bg="light" text="dark">
                Defense: {props.stats[2].base_stat}
              </Badge>{" "}
              <Badge pill bg="light" text="dark">
                SP Attack: {props.stats[3].base_stat}
              </Badge>{" "}
              <br></br>
              <Badge pill bg="light" text="dark">
                SP Defense: {props.stats[4].base_stat}
              </Badge>{" "}
              <Badge pill bg="light" text="dark">
                Speed: {props.stats[5].base_stat}
              </Badge>{" "}
              <br></br>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}


function GenerateTypeAndScheme({type}) {
  const [pokeType, setPokeType] = useState(new Set([]));
  useEffect(() => {
    typeSelection.forEach(item => {
      // console.log(type[0])
      if(item.type === type[0]?.type?.name){
        setPokeType(pokeType.add(item.svg))
      }else if(item.type === type[1]?.type?.name) {
        setPokeType(pokeType.add(item.svg))
      }
    }, [type])

    return () => {
      setPokeType(new Set([]))
    }    
    //
  }, [type])

  return (
    <>
    {console.log(pokeType.values())}
      {
        Array.from(pokeType).map(item => {
          return <img src={item} alt="type" key={item.toString()} style={{height: '100px', width: '100px'}}/>
        })
      }
    </>
  )
}

export default Stats;
