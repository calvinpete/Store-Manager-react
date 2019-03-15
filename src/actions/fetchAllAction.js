import actionTypes from './actionTypes';

const { BASE_URL } = process.env;

const fetchAllProducts = () => dispatch => fetch(`${BASE_URL}/products`, {
  method: 'GET',
  mode: 'cors',
  headers: {
    'x-access-token': JSON.parse(localStorage.getItem('token')),
  },
})
  .then(resp => resp.json())
  .then((data) => {
    dispatch({
      type: actionTypes.FETCH_ALL_PRODUCTS,
      payload: data,
    });
  });

export default fetchAllProducts;
