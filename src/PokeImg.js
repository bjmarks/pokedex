export default function pokeImg({ pokemon }) {
  const consl = async () => {
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`).then(res => res.json()).then(data => { 
      // console.log(data.flavor_text_entries)
      let x = data.flavor_text_entries;
      for(let i = 0; i < x.length; i++) {
        if(x[i].version.name === "red") {
          console.log(x[i].flavor_text.replaceAll("\n", " ").replaceAll("\f", " "));
      }
    }
  })
}
  return (
    <div className="image_placeholder">
        {<img id="pokeImg" className="pokeImg" alt="pokemon" onClick={consl} title={pokemon.name} src={pokemon.sprites.other.home.front_default || pokemon.sprites.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"} /> }
    </div>      
  )
}