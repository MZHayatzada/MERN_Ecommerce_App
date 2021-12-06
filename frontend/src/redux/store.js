import axios from 'axios';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import { loginReducer, getProductReducer, getSingleProductReducer, cartReducer, calculateTotalReducer, calculationReducer, qtyChangeReducer } from './reducers';

const rootReducer = combineReducers({
    login: loginReducer,
    products: getProductReducer,
    singleProduct: getSingleProductReducer,
    cartItems: cartReducer,
    qtyChange: qtyChangeReducer
});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'))
// const productsFromStorage = JSON.parse(localStorage.getItem('products'))
// const initialState = {
//     products: productsFromStorage,
//     cart: cartItemsStorage
// }

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store