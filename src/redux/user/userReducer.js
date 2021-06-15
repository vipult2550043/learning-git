import { FETCH_USER_REQ, FETCH_USER_SUCCESS, FETCH_USER_FAILURE } from "./userType";

const initial_state = {
    loading : false,
    data : [],
    error : ''
}

const userReducer = (state=initial_state,action)=>{
    switch (action.type) {
        case FETCH_USER_REQ :
            return {
                ...state,
                loading : true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error : ''
            }
        
        case FETCH_USER_FAILURE:
            return {
                ...state,
                data: [],
                loading: false,
                error : action.payload
            }
        default: return state
            
    }
}

export default userReducer;