export default function pokeImg({ pokemon }) {
  const consl = async () => {
    const descrip = document.getElementById("desc");
    const img = document.getElementById("pokeImg");
    let arr = [];
    img.style.visibility = "hidden";
    img.style.display = "none";
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`).then(res => res.json()).then(data => { 
      let x = data.flavor_text_entries;
      if(x.length === 0) {
        let text = "this pokemon has no Description as of yet";
          descrip.style.display = "flex";
          descrip.style.visibility = "visible";
          descrip.innerHTML = text;
      }
      for(let i = 0; i < x.length; i++) {
        if(x[i]?.language.url === "https://pokeapi.co/api/v2/language/9/") {
          arr.push(x[i]);
          let text = arr[0].flavor_text.replaceAll("\n", " ").replaceAll("\f", " ");
          // console.log(text)
          descrip.style.display = "flex";
          descrip.style.visibility = "visible";
          descrip.innerHTML = text;
      }
    }
  })
}
const show = () => {
  const descrip = document.getElementById("desc");
  const img = document.getElementById("pokeImg");
  descrip.style.visibility = "hidden";
  descrip.style.display = "none";
  img.style.visibility = "visible";
  img.style.display = "flex";

}
  return (
    <div className="image_placeholder">
      <img id="pokeImg" className="pokeImg" alt="pokemon" onClick={consl} title={pokemon.name} src={pokemon.sprites.other.home.front_default || pokemon.sprites.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"} />
      <p className="description" id="desc" onClick={show}>unable to retrive pokemon desrciption</p>
    </div>      
  )
}