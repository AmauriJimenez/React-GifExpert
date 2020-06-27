const api_KEY = 'qoqWdUBHBwJFGa5ffzb9DeRYBFDU2esh';
const api = 'search';
const limite = 10;


export const getGifs = async (anime) => {
    const url = `https://api.giphy.com/v1/gifs/${api}?q=${encodeURI(anime)}&limit=${limite}&api_key=${api_KEY}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    //console.log(url);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    //console.log(gifs);
    return gifs;
}
