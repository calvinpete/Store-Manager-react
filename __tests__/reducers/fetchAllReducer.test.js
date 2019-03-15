import fetchAllReducer from '../../src/reducers/fetchAllReducer';
import actionTypes from '../../src/actions/actionTypes';


describe('fetchAllReducer', () => {
  it('should return the initial State', () => {
    const initialState = {};
    expect(fetchAllReducer(initialState, {})).toEqual({});
  });
  it('should return FETCH_ALL_PRODUCTS action', () => {
    const expectedState = {
      products: [],
    };
    const action = {
      type: actionTypes.FETCH_ALL_PRODUCTS,
      payload: [],
    };
    expect(fetchAllReducer({}, action)).toEqual(expectedState);
  });
});
