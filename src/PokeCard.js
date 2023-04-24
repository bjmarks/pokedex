import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeStats from './PokeStats'
import PokeSearch from './PokeSearch'
import PokeImg from './PokeImg'
export default function PokeCard() {
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  const currentPokemon = `https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(currentPokemon);
    setLoading(true)
    let cancel;
    axios.get(currentPokemon, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res =>{
      setLoading(false)
      setPokemon(res.data)
    });
    return () => cancel()
  },[currentPokemon])
  if (loading) return "Loading...."
  return (
    <>
      <div className={"pokedex " + (pokemon.types[0].type.name)}>
        <div className="top">
          <PokeSearch pokemon={pokemon} pokeS={setCurrentPokemonId} cpi={currentPokemon} />
          <PokeImg pokemon={pokemon} />
        </div>
        <PokeStats pokemon={pokemon} />
      </div>
    </>
  )
}