import { GET_DATA, HANDLE_TOGGLE, HANDLE_FILTER } from './actionTypes'
import axios from 'axios'

export const getData = () => dispatch => {
    axios.get(`https://jsonplaceholder.typicode.com/photos `)
    .then((res) => 
        dispatch({
        type: GET_DATA,
        payload: res.data
    }))
}

export const handleToggle = (picture) => {
    return {
        type: HANDLE_TOGGLE,
        faves: picture
    };
};

export const handleFilter = (filter) => {
    return {
        type: HANDLE_FILTER,
        filter: filter
    };
};