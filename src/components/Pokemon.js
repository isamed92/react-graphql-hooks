import React from 'react';

export function Pokemon({pokemon}){

    return(
        <div className="pokemon">
            <div className="pkm-name">
                <p> {pokemon.name} </p>
            </div>
            <div className="pkm-meta">
                <span> {pokemon.maxHP} </span>
                <span> {pokemon.maxCP} </span>
            </div>
            <div className="pkm-img">
                <img src={pokemon.image} alt={pokemon.name}/>

            </div>
            <div className="pkm-attcks">
                {pokemon.attacks && pokemon.attacks.special.slice(0,3).map(attack =>(
                    <span key={`${attack.name}-${attack.damage}`}>
                        {attack.name}
                    </span>
                ))}

            </div>
        </div>
        );

}