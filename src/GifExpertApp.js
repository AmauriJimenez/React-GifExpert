import React, { useState } from 'react'
import { AddAnime } from './components/AddAnime';

export const GifExpertApp = ({ setAnime }) => {

    //const animes = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [animes, setAnimes] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    // const agregarAnime = () => {
    //     setAnimes([...animes, 'Capitan Tsubasa']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddAnime setAnimes={setAnimes} />
            <hr />
            <ol>
                {animes.map((anime) => {
                    return <li key={anime}> {anime}</li>
                })}
            </ol>
        </>
    );
}
