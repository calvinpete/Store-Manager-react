import actionTypes from '../actions/actionTypes';

const initialState = {
  message: '',
  error: '',
  isSuccessful: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESSFUL:
      return {
        ...state,
        message: action.payload,
        isSuccessful: true,
      };
    case actionTypes.LOGIN_FALIURE:
      return {
        ...state,
        error: action.payload,
        isSuccessful: false,
      };
    default:
      return { ...state };
  }
};

export default loginReducer;
