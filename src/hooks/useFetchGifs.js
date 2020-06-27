import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (anime) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(anime)
            .then(images => {

                setState({
                    data: images,
                    loading: false
                });

            });
    }, [anime]);

    return state;
}