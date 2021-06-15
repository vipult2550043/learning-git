import { FETCH_USER_REQ, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType";
import axios from 'axios';

export const fetchUserReq = () => {

    return {
        type: FETCH_USER_REQ
        
    }
}

export const fetchUserSucess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload : users
    }
}

export const fetchUserFailure = (err) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: err
    }
}
 // It is used for async call and it will return another function using thunk middleware and it can have async
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserReq)
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                const users = response.data;
                dispatch(fetchUserSucess(users))
            }).catch((err) => {
                const errorMsg = err.message
                dispatch(fetchUserFailure(errorMsg))
        })
    }
}