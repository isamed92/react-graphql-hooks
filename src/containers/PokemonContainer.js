import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {GET_POKEMON} from '../graphql/get-pokemon';
import { Pokemon } from '../components/Pokemon';

export function PokemonsContainer(){
    const {data: {pokemons = []} ={} } = useQuery(GET_POKEMON, {
        variables: {first: 152}
    });
    return (
        <div className="container">
            {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)}
        </div>
    )

}