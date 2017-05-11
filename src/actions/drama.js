import fetch from 'isomorphic-fetch';

export const FETCH_DRAMA_REQUEST = 'FETCH_DRAMA_REQUEST'

function requestDrama(url){
    return {
        type: FETCH_DRAMA_REQUEST,
        url
    };
}


/**
 * Fetch drama from endpoint on the server
 * @param {string} query - Query string for the url
 * @return {object} A Promise
 */

export function fetchDrama(query){
    return dispatch => {
        let url = `http://localhost:3000/drama/1`;
        console.log('hello');
        dispatch(requestDrama(url))
        return fetch(url)
        .then((response) => {
            let status = response.status
            if (status === 404) {
                throw new NotFoundError('Drama not found');
            } else if (status >= 400) {
                throw new InternalServerError('Bad response from API, response: ' + JSON.stringify(response));
            }
            return response.json();
        }, (error) => {

        });

    };
};
