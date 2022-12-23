import React, {useContext} from 'react'
import Main from "./Main";
import Stats from "./Stats";
import ThemeProvider from 'react-bootstrap/ThemeProvider'



function Body(props) {
 const breakPoint = useContext(ThemeProvider)

  return (
    
     
            <React.Fragment
            >
              <div
              >
                <div className='d-flex justify-content-around'
                style={{marginBottom: '4rem'}} 
                >

                  <div id='main' className='mainn active' >
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
                  <div id='stats' className='mainn'  >
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
            </React.Fragment>
  )
}

export default Body