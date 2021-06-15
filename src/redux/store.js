import { createStore, combineReducers,applyMiddleware } from "redux";
import { reducers } from './cake/cakeReducers'
import { IcecreamReducer } from '../redux/icecream/icecreamReducer'
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from './user/userReducer';
import thunk from 'redux-thunk';

const combineReducer = combineReducers(
    {
        cake: reducers,
        ice: IcecreamReducer,
        user: userReducer
    }
);

//Dev tool is added as second args for create store and Middleware is passed as dev tool arguments
const store = createStore(combineReducer, composeWithDevTools(applyMiddleware(logger, thunk)));
//const store = createStore(combineReducer, applyMiddleware(logger, thunk));
export default store;