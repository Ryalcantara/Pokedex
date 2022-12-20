import React from 'react'

async function ColorSchemeProvider() {
    let pokeColor = await fetch('https://pokeapi.co/api/v2/pokemon-species/1/')
    return(
        pokeColor
    )
}

export default ColorSchemeProvider