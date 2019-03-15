import actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
};

const allProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return { ...state };
  }
};

export default allProductsReducer;
