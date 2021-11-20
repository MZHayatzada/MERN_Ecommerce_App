const { default: axios } = require("axios");
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } = require("./constants")
    //Login user
export const login_user = (email, password) => async(dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            console.log(email, password);
            const response = await axios.post('/login', { email, password })
            dispatch({ type: LOGIN_SUCCESS, payload: response })
        } catch (error) {
            dispatch({ type: LOGIN_FAIL, payload: error })
        }
    }
    //Get products
export const getProducts = () => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST, loading: true });
        const response = await axios.get();
        dispatch({ type: GET_PRODUCT_SUCCESS, loading: false, payload: response })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL, loading: false, payload: error })
    }
}