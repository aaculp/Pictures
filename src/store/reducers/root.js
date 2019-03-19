import { GET_DATA, HANDLE_FILTER, HANDLE_TOGGLE } from '../actions/actionTypes'

const initialState = {
    pictures: [],
    faves: [],
}

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                pictures: action.payload,
            }
        case HANDLE_TOGGLE:
            return {
                ...state,
                faves: action.faves
            }
        case HANDLE_FILTER:
            return {
                ...state,
                filter: action.filter
            }
        default: 
            return state;
    }
}

export default reducer