import React from 'react'
import PokeStats from './PokeStats'
import PokeSearch from './PokeSearch'
import PokeImg from './PokeImg'
export default function PokeCard({ pokemon }) {
  console.log(pokemon)
  return (
    <>
      <div className={"pokedex " + (pokemon.types[0].type.name)}>
        <div className="top">
          <PokeSearch pokemon={pokemon} />
          <PokeImg pokemon={pokemon} />
        </div>
        <PokeStats pokemon={pokemon} />
      </div>
    </>
  )
}