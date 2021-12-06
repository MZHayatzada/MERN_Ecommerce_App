const { default: axios } = require("axios");
const { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, GET_SINGLE_PRODUCT_FAIL, DECREASE_ITEM_FROM_CART, INCREASE_ITEM_TO_CART, CLEAR_CART, ADD_ITEM_TO_CART, CALCULATE_TOTAL, CALCULATE_EACH_ITEM_TOTAL } = require("./constants")
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
export const getProducts = () => async(dispatch, getState) => {
    try {
        dispatch({ type: GET_PRODUCT_REQUEST });
        const { data } = await axios.get('/products');
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_PRODUCT_FAIL, payload: error })
    }
    // localStorage.setItem('products', JSON.stringify(getState().products.data))

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

export const addItemToCard = (id, qty) => async(dispatch, getState) => {
    try {
        dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });
        const { data } = await axios.get(`/products/${id}`);
        dispatch({ type: ADD_ITEM_TO_CART, payload: {...data.singleProduct, qty } })

    } catch (error) {
        dispatch({ type: GET_SINGLE_PRODUCT_FAIL, payload: error })
    }
    // localStorage.setItem('cartItems', JSON.stringify(getState().cartItems.cart))

}
export const qtyChanged = (id, qty) => async(dispatch) => {
    try {
        dispatch({ type: 'GET_SINGLE_PRODUCT_REQUEST_CHANGE' });
        const { data } = await axios.get(`/products/${id}`);
        dispatch({ type: 'CHANGED', payload: {...data.singleProduct, qty } })

    } catch (error) {
        dispatch({ type: GET_SINGLE_PRODUCT_FAIL, payload: error })
    }
}