import loginReducer from '../../src/reducers/loginReducer';
import actionTypes from '../../src/actions/actionTypes';

const initialState = {
  message: '',
  error: '',
  isSuccessful: false,
};

describe('loginReducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });
  it('should return LOGIN_SUCCESSFUL action', () => {
    const expectedState = {
      message: '',
      error: '',
      isSuccessful: true,
    };
    const action = {
      type: actionTypes.LOGIN_SUCCESSFUL,
      payload: '',
    };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return LOGIN_FALIURE action', () => {
    const expectedState = {
      message: '',
      error: '',
      isSuccessful: false,
    };
    const action = {
      type: actionTypes.LOGIN_FALIURE,
      payload: '',
    };
    expect(loginReducer(initialState, action)).toEqual(expectedState);
  });
});
