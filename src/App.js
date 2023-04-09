import './App.css';
import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios';
function App() {
  const [currentPokemonId, setCurrentPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`);
  const increment = () => {setCurrentPokemonId(currentPokemonId + 1)}
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
      <PokemonList pokemon={ pokemon } />
  );
}
export default App;