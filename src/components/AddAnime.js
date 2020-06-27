import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddAnime = ({ setAnimes }) => {
    const [inputValue, setInputValue] = useState('');
    const inputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value)
    }

    const inputSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 1) {
            setAnimes(anime => [inputValue, ...anime]);
            setInputValue('');
        }
        //console.log('enviado');

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

AddAnime.propTypes = {
    setAnimes: PropTypes.func.isRequired
}
