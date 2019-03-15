import fecthMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import fetchAllProducts from '../../src/actions/fetchAllAction';
import actionTypes from '../../src/actions/actionTypes';

const { BASE_URL } = process.env;
const token = localStorage.getItem('token');

const mockStore = configureStore([thunk]);
describe('fetchAllProducts', () => {
  beforeEach(() => {
    fecthMock.restore();
  });
  it('should dispatch FETCH_ALL_PRODUCTS action', () => {
    const expectedActions = [
      {
        type: actionTypes.FETCH_ALL_PRODUCTS,
        payload: [],
      },
    ];
    fecthMock.getOnce(`${BASE_URL}/products`, {
      headers: { 'x-access-token': `${token}` },
      body: [],
    });
    const store = mockStore();
    return store.dispatch(fetchAllProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
