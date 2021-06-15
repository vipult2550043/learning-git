import { BUY_CAKE, RESET } from "./cakeType";

const initial_state = {
    noOfCake: 10
}
const reset = 10;

export const reducers = (state = initial_state, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCake: state.noOfCake - 1
            }
        case RESET:
            return {
                ...state,
                noOfCake: reset

            }
        default:
            return state
    }
}
