import { ADD_ITEM_TO_CART, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, INCREASE_ITEM_TO_CART, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";
import store from './store'

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...state, loading: true }
        case LOGIN_SUCCESS:
            {
                return {...state, loading: false, user: action.payload }
            }
        case LOGIN_FAIL:
            {
                return {...state, loading: false, error: action.payload }
            }
        default:
            return state
    }
}

export const getProductReducer = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCT_REQUEST:
            return { loading: true }
        case GET_PRODUCT_SUCCESS:
            return { loading: false, data: action.payload }
        case GET_PRODUCT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//Practice of if for different action type
export const getSingleProductReducer = (state = [], action) => {
    if (action.type === GET_SINGLE_PRODUCT_REQUEST) {
        return { loading: true }
    } else if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
        return { loading: false, data: action.payload }
    } else if (action.type === GET_SINGLE_PRODUCT_FAIL) {
        return { loading: false, error: action.payload }
    } else {
        return state;
    }
}


//Cart reducer 
export const cartReducer = (state = { cart: [] }, action) => {
    const item = action.payload
        //If item exists

    if (action.type === ADD_ITEM_TO_CART) {

        const existItem = state.cart.find((singleItem) => singleItem.id === item.id)
        if (existItem) {
            return {
                ...state,
                cart: state.cart.map((singleItem) => {
                    if (singleItem.id === existItem.id) {
                        return item
                    } else {
                        return singleItem
                    }
                })
            }
        } else {
            return {
                ...state,
                cart: [...state.cart, item]
            }
        }
    }
    return state

}