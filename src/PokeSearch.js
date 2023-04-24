import React from 'react'
export default function PokeSearch({ pokemon, pokeS, cpi }) {
  const handleId = (event) => {
    if (event.key === 'Enter' && !isNaN(event.target.value)) {
      pokeS(event.target.value);
    }
  }
  const handleName = (event) => {
    if (event.key === 'Enter') {
      pokeS(event.target.value);
    }
  }
  return (
    <div className="top-bar">
        <input type="text" className="name" onKeyDown={handleName} placeholder={(pokemon.name[0]).toUpperCase()+(pokemon.name).slice(1)} />
        <input type="text" className="id" onKeyDown={handleId} placeholder={"#" + pokemon.id.toString().padStart(3, "0")}/>
    </div>
  )
}