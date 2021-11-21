import { GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";


export const loginReducer = (state = { email: '', password: '' }, action) => {
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
    if (action.type == GET_SINGLE_PRODUCT_REQUEST) {
        return { loading: true }
    } else if (action.type == GET_SINGLE_PRODUCT_SUCCESS) {
        return { loading: false, data: action.payload }
    } else if (action.type == GET_SINGLE_PRODUCT_FAIL) {
        return { loading: false, error: action.payload }
    } else {
        return state
    }
}