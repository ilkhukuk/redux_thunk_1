import axios from "axios";

export const getProducts = () => (dispatch) => {
    axios
        .get('https://fakestoreapi.com/products')
        .then((res) => dispatch({ type: 'SET_PRODUCTS', payload: res.data, }))
        .catch((err) => dispatch({type: 'SET_ERROR', payload: err,}));
}