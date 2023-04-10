import React from 'react'
export default function pokeImg({ pokemon }) {
  console.log(pokemon)
  return (
    <div className="image_placeholder">
        <img id="pokeImg" className="pokeImg" alt="pokemon" title={pokemon.name} src={pokemon.sprites.other.home.front_default || pokemon.sprites.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"} />
    </div>      
  )
}