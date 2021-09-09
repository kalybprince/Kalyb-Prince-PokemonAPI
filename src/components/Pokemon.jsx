import React, { useState } from 'react';

const GetPokemonNames = (props) => {
    const [state, setState] = useState(0);

    const FetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json()})
            .then(response => {
                setState(response.results)
            })
            .catch(err => {
                console.log(err)
            });
        }
        
    return (
        <div>
            <button onClick={ () => FetchPokemon() }>Get pokemon names!</button>
            { 
                (state) ?
                <div>
                    {
                        state.map((pokemon, index)=> {
                            return (<div key={index}>{pokemon.name}</div>)
                        })
                    }
                </div> :
                <h1>click the button</h1>
            }
        </div>
    )
}

export default GetPokemonNames;