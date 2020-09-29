import * as actions from './actionTypes'
import axios from 'axios'

const url = 'http://localhost:4000/movies?limit=9';

export const moviesFetching = () => {
    return {
        type: actions.FETCH_MOVIE_REQUEST
    }
}

export const moviesFetchedSuccess = movies => {
    return {
        type: actions.FETCH_MOVIE_SUCCESS,
        payload: movies
    }
}

export const moviesFetchedError = error => {
    return {
        type: actions.FETCH_MOVIE_ERROR,
        payload: error
    }
}

export const updateMovieAction = movie => {
    return {
        type: actions.MOVIE_UPDATE,
        payload: movie
    }
}

export const deleteMovieAction = movie => {
    return {
        type: actions.MOVIE_DELETE,
        payload: movie
    }
}

export const createMovieAction = movie => {
    return {
        type: actions.MOVIE_CREATE,
        payload: movie
    }
}
export const fetchMovies = () => async (dispatch) => {
    try {
        dispatch(moviesFetching());
        const { data } = await axios.get(url)
        dispatch(moviesFetchedSuccess(data))
    }
    catch(error) {
        dispatch(moviesFetchedError(error.message))
    }
}

export const updateMovie = movie => async (dispatch) => {
    try {
        await axios.put(url, movie);
        dispatch(updateMovieAction(movie))
    }
    catch(error) {
        dispatch(moviesFetchedError(error.message))
    }
}

export const deleteMovie = movie => async (dispatch) => {
    try {
        await axios.delete(`${url}/${movie.id}`)
        dispatch(deleteMovieAction(movie))
        dispatch(fetchMovies())
    }
    catch(error) {
        dispatch(moviesFetchedError(error.message))
    }
    }

export const createMovie = movie => async (dispatch) => {
    try {
        await axios.post(url, movie);
        console.log(movie)
        dispatch(createMovieAction(movie))
        dispatch(fetchMovies())
    }
    catch(error) {
        dispatch(moviesFetchedError(error.message))
    }
}
    