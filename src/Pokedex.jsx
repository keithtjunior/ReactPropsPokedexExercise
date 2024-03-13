import React from 'react'
import Pokecard from './Pokecard';
import Card from 'react-bootstrap/Card'

const Pokedex = ({ pokemon, totalExp, isWinner }) => {
    return (
      <div className='pokedex'>
        {pokemon.map(p => (
            <Pokecard 
              key={p.id}
              id={p.id} 
              name={p.name} 
              type={p.type} 
              base_experience={p.base_experience}/>
        ))}
        <h4 className='winner'>{isWinner ? 'THIS HAND WINS!' : ''}</h4>
      </div>
    )
}

export default Pokedex;