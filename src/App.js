import './App.css';
import React, { useState, useEffect } from 'react';
import PokeCard from './PokeCard';
import axios from 'axios';
function App() {
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
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
      <PokeCard pokemon={ pokemon } />
  );
}
export default App;