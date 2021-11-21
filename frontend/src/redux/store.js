import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { loginReducer, getProductReducer, getSingleProductReducer } from './reducers';

const rootReducer = combineReducers({ login: loginReducer, products: getProductReducer, singleProduct: getSingleProductReducer })
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store