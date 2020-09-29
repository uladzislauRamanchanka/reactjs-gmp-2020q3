import * as actions from './actionTypes'

const initialState = {
    isLoading: false,
    isLoaded: false,
    error: '',
    data: [],
    amount: '',
    filter: {
        sortBy: '',
        filterBy: ''
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FETCH_MOVIE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case actions.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                amount: action.payload.totalAmount,
                data: action.payload.data,
                error: ''
            }
        case actions.FETCH_MOVIE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case actions.MOVIE_UPDATE:
            return {
                ...state,
                data: state.data.map(movie => movie.id === action.payload.id ? action.payload : movie)
            }
        case actions.MOVIE_DELETE:
        case action.MOVIE_CREATE:
        default: return state
            
    }
}

export default reducer