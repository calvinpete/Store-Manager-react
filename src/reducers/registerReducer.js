import actionTypes from '../actions/actionTypes';

const initialState = {
  message: '',
  error: '',
  isSuccessful: false,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESSFUL:
      return {
        ...state,
        message: action.payload,
        isSuccessful: true,
      };
    case actionTypes.REGISTER_FALIURE:
      return {
        ...state,
        error: action.payload,
        isSuccessful: false,
      };
    default:
      return { ...state };
  }
};

export default registerReducer;
