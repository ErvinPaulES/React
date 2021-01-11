//const URL = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=343a7ca7e02ad55127d6f66daf450028&format=json';
const URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=343a7ca7e02ad55127d6f66daf450028&format=json';

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            imageUri: artist.image[3]['#text']
        }
    }))
}

export {getMusicData}