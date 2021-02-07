import {GET_MOVIE, ERROR} from './movieActions';
import {BASE_URL} from '../utils/Constants'
function getMovie(id) {
    return dispatch => {
        fetch(BASE_URL + '/movies/' + id)
        .then(res => res.json())
        .then(
            (result) => {
                console.log("movie details", result)
                dispatch({
                    type: GET_MOVIE,
                    payload: result
                });
                dispatch({
                    type: ERROR,
                    payload: false
                });
            },
            (error) => {
                dispatch({
                    type: ERROR,
                    payload: true
                })
                console.log('Error in fetching all movies: ', error);
            });
    }
}

export default getMovie;