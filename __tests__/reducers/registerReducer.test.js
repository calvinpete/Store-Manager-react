import registerReducer from '../../src/reducers/registerReducer';
import actionTypes from '../../src/actions/actionTypes';

const initialState = {
  message: '',
  error: '',
  isSuccessful: false,
};

describe('registerReducer', () => {
  it('should return the initial state', () => {
    expect(registerReducer(initialState, {})).toEqual(initialState);
  });
  it('should return REGISTER_SUCCESSFUL action', () => {
    const expectedState = {
      message: '',
      error: '',
      isSuccessful: true,
    };
    const action = {
      type: actionTypes.REGISTER_SUCCESSFUL,
      payload: '',
    };
    expect(registerReducer(initialState, action)).toEqual(expectedState);
  });
  it('should return REGISTER_FALIURE action', () => {
    const expectedState = {
      message: '',
      error: '',
      isSuccessful: false,
    };
    const action = {
      type: actionTypes.REGISTER_FALIURE,
      payload: '',
    };
    expect(registerReducer(initialState, action)).toEqual(expectedState);
  });
});
