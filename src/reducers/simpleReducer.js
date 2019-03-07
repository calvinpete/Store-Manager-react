import actionTypes from '../actions/actionTypes';

const initialState = {};

const simpleReducer = (state = initialState, action) => {
  switch (actionTypes) {
    case actionTypes.SIMPLE_ACTION:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default simpleReducer;
