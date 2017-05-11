import fetch from 'isomorphic-fetch';

export const FETCH_DRAMAS_REQUEST = 'FETCH_DRAMAS_REQUEST';

function requestDramas(url){
    return {
        type: FETCH_DRAMAS_REQUEST,
        url
    };
}

/**
 * Fetch drama from endpoint on the server
 * @param {string} query - Query string for the url
 * @return {object} A Promise
 */


export function loadDramas () {
    return dispatch => {
        let url = `http://localhost:3000/drama/`;
        dispatch(requestDramas(url))
        console.log('itds me')
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
}  


