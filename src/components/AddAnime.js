import React, { useState } from 'react'

export const AddAnime = ({ setAnimes, animes }) => {
    const [inputValue, setinputValue] = useState('Vacio');
    const inputChange = (e) => {
        console.log(e.target.value);
        setinputValue(e.target.value)
    }

    const inputSubmit = (e) => {
        e.preventDefault();
        //console.log('enviado');
        setAnimes([...animes, inputValue]);

    }

    return (
        <form onSubmit={inputSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={inputChange} />
        </form>
    );
}
