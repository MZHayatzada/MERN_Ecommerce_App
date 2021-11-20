import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(loginReducer, composeEnhancer(applyMiddleware(thunk)));

export default store