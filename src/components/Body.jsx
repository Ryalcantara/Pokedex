import React, {useContext} from 'react'
import Main from "./Main";
import Stats from "./Stats";
import ThemeProvider from 'react-bootstrap/ThemeProvider'



function Body(props) {
 const breakPoint = useContext(ThemeProvider)

  return (
    
    <div style={{ margin: ".1rem" }}>
     
            <div>
              <div
              id='body-background'
                // style={{
                //   backgroundColor: props.background === "black" ? "gray" : props.background,
                //   transition: "all 300ms ease",
                //   borderRadius: "29px",
                // }}
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  // style={{
                  //   backgroundColor: "rgba(0, 0, 0, 0.1)",
                  //   borderRadius: "29px",
                  // }}
                >
                  <div id='main' className='mainn active'>
                    {props.currentPage && (
                      <Main
                      flavor={props.flavor}
                        color={props.background}
                        pokeName={props.currentPage.name}
                        pokeId={props.currentPage.id}
                        sprites={
                          props.currentPage.sprites.other["official-artwork"]
                            .front_default
                        }
                      />
                    )}
                  </div>
                  <div id='stats' className='mainn'>
                    {props.currentPage && (
                      <Stats
                        pokemon={props.currentPage}
                        stats={props.currentPage.stats}
                        type={props.currentPage?.types[0].type.name}
                        type2={
                          props.currentPage?.types[1] &&
                          props.currentPage?.types[1].type.name
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Body