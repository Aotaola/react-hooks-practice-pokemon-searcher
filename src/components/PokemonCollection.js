//import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import React, { useState, useEffect } from "react";

function PokemonCollection({pokemon}) {
  
  const [pokecard, setPokecard]= useState([])

  const fetchPokemon = async() => {
    const req = await fetch("http://localhost:3000/pokemon")
    const res = await req.json();
    console.log(res)
    setPokecard(res)
  }
  useEffect(() => {
    fetchPokemon();
  },[])
  const [pokesprite, setPokesprite] = useState([]
    )
    function handleclick((e)=>{
      [setPokesprite ? {pokemon.sprite.back}: cd]
     })

  return (
    <Card.Group itemsPerRow={6} >
        <h1>Hello From Pokemon Collection</h1>
    {pokecard.map((pokemon)=>{
      return(
        <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        )
      })}
    </Card.Group >
  );
}

export default PokemonCollection;
