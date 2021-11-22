const { default: axios } = require("axios");
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAIL } = require("./constants")
    //Login user
export const login_user = (email, password) => async(dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            const response = await axios.post('/login', { email, password })
            dispatch({ type: LOGIN_SUCCESS, payload: response })
        } catch (error) {
            dispatch({ type: LOGIN_FAIL, payload: error })
        }
    }
    //Get products
export const getProducts = () => async(dispatch) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST });
        const { data } = await axios.get('/products');
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL, payload: error })
    }
}

export const getSingleProduct = (id) => async(dispatch) => {
    try {
        dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
        const { data } = await axios.get(`/products/${id}`);
        dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: data.singleProduct })
    } catch (error) {
        dispatch({ type: GET_SINGLE_PRODUCT_FAIL, payload: error })
    }
}