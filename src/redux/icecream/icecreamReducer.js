import { BUY_ICECREAM, RESET_ICE } from './icecreamTypes';

const initial_state = {
    noOfIceCream: 10
}

const reset = 10;

 export const IcecreamReducer = (state = initial_state, action) => {

    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                noOfIceCream: state.noOfIceCream - 1
            }
        
        case RESET_ICE: {
            return {
                ...state,
                noOfIceCream: reset
            }
        }
        default: return state



    }
}
