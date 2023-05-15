export const authEndpoint = 'https://accounts.spotify.com/authorize';

const redirectURI = 'http://localhost:3000/blend';

const clientID = process.env.REACT_APP_CLIENT_ID;

const scopes = [
    "user-library-modify",
    "user-library-read",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-read-private", "user-read-email"
]

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&show_dialog=true&scope=${scopes.join('%20')}`;

export const getTokenFromURL = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial
    }, {});
}