import React from 'react'
export default function PokemonList({ pokemon }) {
  console.log(pokemon)
  return (
    <>
      <div className={"pokedex " + (pokemon.types[0].type.name)}>
        <div className="top">
          <div className="top-bar">
            <input type="text" className="name" placeholder={(pokemon.name[0]).toUpperCase()+(pokemon.name).slice(1)} />
            <input type="text" className="id" placeholder={"#" + pokemon.id.toString().padStart(3, "0")}/>
          </div>
          <div className="image_placeholder">
            <img id="pokeImg" className="pokeImg" alt="pokemon" title={pokemon.name} src={pokemon.sprites.other.home.front_default || pokemon.sprites.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"} />
          </div>      
        </div>
        <div className="stat_container">
          <div className="types" id="types">
              {pokemon.types.map((t, i) => <div className={"type " + (t.type.name + "_dark")} key={i} title={t.type.name + " type"}>{t.type.name}</div>)}
          </div>
          <h4 className="base_stats">Base Stats</h4>
          <div className="stats">
            <div className="stat_row" title='Health Points'>
              <div className="stat_desc">HP</div>
              <div className="stat_number">{pokemon.stats[0].base_stat.toString().padStart(3, '0')}</div>
              <div className="stat_bar">
                <div className={"outer_bar " + (pokemon.types[0].type.name)+"_light"}>
                  <div className={"inner_bar " + (pokemon.types[0].type.name)+"_dark"} id="HP" style={{width: pokemon.stats[0].base_stat + "%"}}></div>
                </div>
              </div>
            </div>
            <div className="stat_row" title='Attack Power'>
              <div className='stat_desc'>ATK</div>
              <div className="stat_number">{pokemon.stats[1].base_stat.toString().padStart(3, '0')}</div>
              <div className="stat_bar">
                <div className={"outer_bar " + (pokemon.types[0].type.name)+"_light"}>
                  <div className={"inner_bar " + (pokemon.types[0].type.name)+"_dark"} id="ATK" style={{width: pokemon.stats[1].base_stat + "%"}}></div>
                </div>
              </div>
            </div>
            <div className="stat_row" title='Defense Power'>
              <div className='stat_desc'>DEF</div>
              <div className="stat_number">{pokemon.stats[2].base_stat.toString().padStart(3, '0')}</div>
              <div className="stat_bar">
                <div className={"outer_bar " + (pokemon.types[0].type.name)+"_light"}>
                  <div className={"inner_bar " + (pokemon.types[0].type.name)+"_dark"} id="DEF" style={{width: pokemon.stats[2].base_stat + "%"}}></div>
                </div>
              </div>
            </div>
            <div className="stat_row" title='Special Attack Power'>
              <div className='stat_desc'>sATK</div>
              <div className="stat_number">{pokemon.stats[3].base_stat.toString().padStart(3, '0')}</div>
              <div className="stat_bar">
                <div className={"outer_bar " + (pokemon.types[0].type.name)+"_light"}>
                  <div className={"inner_bar " + (pokemon.types[0].type.name)+"_dark"} id="SATK" style={{width: pokemon.stats[3].base_stat + "%"}}></div>
                </div>
              </div>
            </div>
            <div className="stat_row" title='Special Defense Power'>
              <div className='stat_desc'>sDEF</div>
              <div className="stat_number">{pokemon.stats[4].base_stat.toString().padStart(3, '0')}</div>
              <div className="stat_bar">
                <div className={"outer_bar " + (pokemon.types[0].type.name)+"_light"}>
                  <div className={"inner_bar " + (pokemon.types[0].type.name)+"_dark"} id="SDEF" style={{width: pokemon.stats[4].base_stat + "%"}}></div>
                </div>
              </div>
            </div>
            <div className="stat_row" title='Speed'>
              <div className='stat_desc'>SPD</div>
              <div className="stat_number">{pokemon.stats[5].base_stat.toString().padStart(3, '0')}</div>
              <div className="stat_bar">
                <div className={"outer_bar " + (pokemon.types[0].type.name)+"_light"}>
                  <div className={"inner_bar " + (pokemon.types[0].type.name)+"_dark"} id="SPD" style={{width: pokemon.stats[5].base_stat + "%"}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}