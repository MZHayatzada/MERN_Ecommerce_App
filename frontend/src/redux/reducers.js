import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./constants";


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