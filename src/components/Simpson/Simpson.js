import React from 'react';

const Simpson = ({simpson}) => {
    const {id,name,gender,photo} = simpson;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>gender: {gender}</div>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;