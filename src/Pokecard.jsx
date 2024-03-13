import React from 'react'
import Card from 'react-bootstrap/Card'

const Pokecard = ({id, name, type, base_experience}) => {
    return (
        <Card>
            <Card.Title>{name}</Card.Title>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <Card.Body>
                <div>Type: <span className='type'>{type}</span></div>
                <div>EXP: {base_experience}</div>
            </Card.Body>
        </Card>
    )
}

export default Pokecard;