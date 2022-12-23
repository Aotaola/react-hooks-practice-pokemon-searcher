import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const {name, sprites, hp} = pokemon
   const {front, back} = sprites

  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={pokemon.sprites.front}/>
          {/* <button onClick={handleclick}/> */}
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
