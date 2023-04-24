import React from 'react'
export default function PokeSearch({ pokemon, pokeS, cpi }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !isNaN(event.target.value)) {
      console.log(event.target.value);
      pokeS(event.target.value);
    }
    if (event.key === 'Enter') {
      console.log(event.target.value);
      pokeS(event.target.value);
    }
  }
  return (
    <div className="top-bar">
        <input type="text" className="name" onKeyDown={handleKeyDown} placeholder={(pokemon.name[0]).toUpperCase()+(pokemon.name).slice(1)} />
        <input type="text" className="id" onKeyDown={handleKeyDown} placeholder={"#" + pokemon.id.toString().padStart(3, "0")}/>
    </div>
  )
}