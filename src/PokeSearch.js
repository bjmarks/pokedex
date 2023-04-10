import React from 'react'
export default function PokeSearch({ pokemon }) {
  console.log(pokemon)
//   const [currentPokemonId, setCurrentPokemonId] = useState(1);
// console.log(currentPokemonId);
  return (
    <div className="top-bar">
        <input type="text" className="name" placeholder={(pokemon.name[0]).toUpperCase()+(pokemon.name).slice(1)} />
        <input type="text" className="id" placeholder={"#" + pokemon.id.toString().padStart(3, "0")}/>
    </div>
  )
}