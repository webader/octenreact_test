import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons=[
        {
            id: 1,
            name: 'Rick Sanchez',
            gender: 'Male',
            photo: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            id: 2,
            name: 'Morty Smith',
            gender: 'Male',
            photo: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            id: 3,
            name: "Summer Smith",
            gender: "Female",
            photo: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        }
    ]
    return (
        <div>
            {simpsons.map(simpson=> <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export default Simpsons;